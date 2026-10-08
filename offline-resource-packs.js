window.offlineResourcePacks = (() => {
  const CACHE = "star-defender-combat-files-v1";
  const base = new URL("./", document.baseURI);
  let pending;
  let progress = () => {};
  const mime = file => /\.png$/.test(file) ? "image/png" : /\.jpe?g$/.test(file) ? "image/jpeg" : /\.json$/.test(file) ? "application/json" : /\.mp3$/.test(file) ? "audio/mpeg" : "application/octet-stream";
  async function control() {
    if (!window.isSecureContext || !navigator.serviceWorker || !window.caches || !window.DecompressionStream)
      throw new Error("当前浏览器不支持资源包缓存，请使用新版浏览器并通过HTTPS打开游戏。");
    await navigator.serviceWorker.register(new URL("packed-assets-sw.js",base), {scope:base.pathname, updateViaCache:"none"});
    await navigator.serviceWorker.ready;
    if (!navigator.serviceWorker.controller) await new Promise((resolve,reject)=>{
      const onChange=()=>{if(navigator.serviceWorker.controller){clearTimeout(timer);navigator.serviceWorker.removeEventListener("controllerchange",onChange);resolve();}};
      const timer=setTimeout(()=>{navigator.serviceWorker.removeEventListener("controllerchange",onChange);reject(new Error("资源缓存初始化超时，请重试。"));},15000);
      navigator.serviceWorker.addEventListener("controllerchange",onChange);onChange();
    });
  }
  async function download(pack, index, total, show, signal) {
    const response=await fetch(new URL(pack.file,base),{signal});
    if(!response.ok)throw new Error("资源包下载失败（"+response.status+"），请重试。");
    const reader=response.body.getReader(), chunks=[];let received=0;
    while(true){const {value,done}=await reader.read();if(done)break;chunks.push(value);received+=value.length;
      progress(pack,received);
      show(`下载资源包 ${index}/${total} · ${(received/1048576).toFixed(1)}/${(pack.bytes/1048576).toFixed(1)} MB`);}
    const data=new Uint8Array(received);let offset=0;for(const c of chunks){data.set(c,offset);offset+=c.length;}
    const hash=Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",data))).map(b=>b.toString(16).padStart(2,"0")).join("");
    if(hash!==pack.sha256)throw new Error("资源包校验失败，请重试下载。");
    return data;
  }
  async function unpack(bytes, cache, pack, index, total, show) {
    show(`解压资源包 ${index}/${total}…`);
    const buffer=await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"))).arrayBuffer();
    const headerLength=new DataView(buffer).getUint32(0,true);
    const entries=JSON.parse(new TextDecoder().decode(new Uint8Array(buffer,4,headerLength)));
    if(entries.length!==pack.files)throw new Error("资源包目录不完整。");
    const start=4+headerLength;
    for(let i=0;i<entries.length;i+=12){
      await Promise.all(entries.slice(i,i+12).map(async ([file,offset,length])=>{
        if(!/^assets\/(resources|internal)\/(import|native)\//.test(file)||file.includes("..")||offset<0||length<0||start+offset+length>buffer.byteLength)throw new Error("资源包路径或长度无效。");
        const response=new Response(new Blob([new Uint8Array(buffer,start+offset,length)],{type:mime(file)}),{headers:{"Content-Type":mime(file)}});
        await cache.put(new URL(file,base),response);
      }));
      show(`准备资源包 ${index}/${total} · ${Math.min(i+12,entries.length)}/${entries.length}`);
    }
  }
  function prepare(show, report = () => {}) {
    if(pending)return pending;
    pending=(async()=>{
      show("正在检查本地资源包…");await control();
      const cache=await caches.open(CACHE), packs=window.__COMBAT_PACKS.packs;
      const totalBytes=packs.reduce((sum,p)=>sum+p.bytes,0), received=new Map();
      let completed=0;
      progress=(pack,bytes)=>{
        received.set(pack.sha256,bytes);
        const downloaded=[...received.values()].reduce((a,b)=>a+b,0);
        report(0.75*downloaded/totalBytes+0.25*completed/packs.length,
          `下载 ${(downloaded/1048576).toFixed(1)}/${(totalBytes/1048576).toFixed(1)} MB · 就绪 ${completed}/${packs.length} 包`);
      };
      const missing=[];
      for(let i=0;i<packs.length;i++){
        const pack=packs[i], marker=new URL("packs/ready-"+pack.sha256,base);
        if(await cache.match(marker)){completed++;progress(pack,pack.bytes);}
        else missing.push({pack,marker,index:i+1});
      }
      // Keep only one download ahead of the decoder to bound memory on phones.
      const controller=new AbortController();
      const fetchNext=entry=>download(entry.pack,entry.index,packs.length,()=>{},controller.signal).then(bytes=>({bytes}),error=>({error}));
      let next=missing.length?fetchNext(missing[0]):null;
      for(let i=0;i<missing.length;i++){
        const result=await next;if(result.error)throw result.error;
        const entry=missing[i];
        next=i+1<missing.length?fetchNext(missing[i+1]):null;
        try {
          await unpack(result.bytes,cache,entry.pack,entry.index,packs.length,()=>{});
          await cache.put(entry.marker,new Response("complete"));
          completed++;progress(entry.pack,entry.pack.bytes);
        } catch(error) {
          controller.abort();
          if(next)await next;
          throw error;
        }
      }
      report(1,"资源包已就绪");
    })().catch(error=>{pending=null;throw error;});
    return pending;
  }
  return {prepare};
})();
