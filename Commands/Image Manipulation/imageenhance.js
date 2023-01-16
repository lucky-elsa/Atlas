const { getBuffer } = require("../../lib/myfunc");
const Jimp = require("jimp");
//const deepai = require('deepai'); 
const im = require("imagemagick");
const fs = require("fs");
const gm = require("gm")


module.exports = {
  name: "enhanceimage",
  alias: ["enhance", "imageenhance"],
  desc: "To make increase image quality",
  category: "Image Manipulation",
  usage: "enhance <reply to image>",
  react: "🍁",
  start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {
    if (/image/.test(mime)) {
      let mediaMess = await quoted.download();

      //let outputImg = './enhanced.jpg';
      /*
      const OutputImgae = await gm(mediaMess).sharpen(10,2).write("./outputImg.jpg", function (err) {
        if (err){ console.log(err);
        return;}
      });

      const enhanced = fs.readFileSync("./outputImg.jpg");
      await Miku.sendMessage(m.from, {image:enhanced,caption: "_Enhanced by:_ *Miku Nakano*"}, { quoted: m })
     */
       //await  Miku.sendMessage(m.from, {image:OutputImgae,caption: "_Enhanced by:_ *Miku Nakano*"}, { quoted: m })
        //fs.unlinkSync(OutputImgae);

        //if (err) throw err;
        
        //fs.unlinkSync(outputImg);
      
      /*-------For ImageMagick-------*/
      /*let outputImg = `./enhanced.jpg`;
      im.convert([mediaMess, "-sharpen", "0x3", outputImg], function (err, stdout) {
        if (err) throw err;
        Miku.sendMessage(m.from, {image:outputImg,caption: "_Enhanced by:_ *Miku Nakano*"}, { quoted: m }).then
        fs.unlinkSync(outputImg);
      });
      */



      /*-------For DEEP AI API-------*/
      /*
      const image = mediaMess;
      deepai.setApiKey('34093939-c620-45fd-9531-9dd27c0d30f0');
      deepai.callStandardApi("torch-srgan", {
        image: image,
    }).then(response => {
        const enhanced = Buffer.from(response.output_url.split(',')[1], 'base64');
        Miku.sendMessage(m.from, {image:enhanced,caption: "_Enhanced by:_ *Miku Nakano*"}, { quoted: m })
    }).catch(err => {
        console.log(err);

    });*/


      /*-------For Sharp module-------*/
     // const image = sharp(mediaMess);
      /*const sharpedImage = await image.sharpen().toBuffer();
    await Miku.sendMessage(m.from, {image:sharpedImage,caption: "_Enhanced by:_ *Miku Nakano*"}, { quoted: m })
      */

     
       /*await Jimp.read(mediaMess)
       .then(image => {
        image.brightness(0.2)
        //.sharpen(3)
        .getBuffer(Jimp.MIME_JPEG, (err, buffer) => {   
        Miku.sendMessage(m.from, {image:buffer,caption: "_Created by:_ *Miku Nakano*"}, { quoted: m })
            
        });
        })*/



        
    } else {
      Miku.sendMessage(
        m.from,
        {
          text: `Please mention an *imade* and type *${prefix}enhance* to increase image quality.`,
        },
        { quoted: m }
      );
    }
  },
};
