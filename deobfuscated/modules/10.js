// module: 10
// deps: {"./codec":19,"./decode":21,"./decoder":22,"./encode":24,"./encoder":25,"./ext":29}
module.exports = {};
const __mod = function(e, t, i) {
        ((i.encode = e("./encode").encode),
          (i.decode = e("./decode").decode),
          (i.Encoder = e("./encoder").Encoder),
          (i.Decoder = e("./decoder").Decoder),
          (i.createCodec = e("./ext").createCodec),
          (i.codec = e("./codec").codec));
      };
