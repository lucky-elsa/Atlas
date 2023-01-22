const { getBuffer } = require("../../lib/myfunc");
const ImageKit = require("imagekit");
const fs = require("fs");

module.exports = {
  name: "imagecircle2",
  alias: ["circle2"],
  desc: "To make circle sized image",
  category: "Image Manipulation",
  usage: "circle <reply to image>",
  react: "🍁",
  start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {
    if (/image/.test(mime)) {
      let mediaMess = await quoted.download();
    
        const imagekit = new ImageKit({
            publicKey: "public_zSRI4l6oHHfPjDAfmISedPYjKp8=",
            privateKey: "private_Uq8cE+iXeT9uMHRy24Bgc8WcHFo=",
            urlEndpoint: "https://ik.imagekit.io/t5ye425gm"
            });

            const inputImagePath = mediaMess;
            const outputImagePath = "./output.jpg";

            imagekit.url({
                path: inputImagePath,
                transformation: [
                    {
                        "crop": "circle"
                    }
                ]
            }).then(function(url){
                console.log(url);
                 Miku.sendMessage(m.from, {image:url,caption: "_Created by: Miku Nakano_"}, { quoted: m })
            }).catch(function(err){
                console.log(err);
            })
    } else {
        m.reply(`Please mention an *image* and type *${prefix}circle* to create circle image.`);
    }
}
}