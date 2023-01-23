const fs = require("fs");
const remobg = require('remove.bg')
const {getRandom} = require("../../lib/myfunc");
require('../../index.js');

module.exports = {
  name: "removebg",
  alias: ["backgroungerase"],
  desc: "To remove backgroung of an image",
  category: "Image Manipulation",
  usage: "removebg <reply to image>",
  react: "🍁",
  start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {
    if (!m.quoted) m.reply (`Send/Reply Image With Caption *${prefix}removebg* to remove background of an image`)
    if (!/image/.test(mime)) m.reply (`Send/Reply Image With Caption *${prefix}removebg* to remove background of an image`);
	if (/webp/.test(mime)) m.reply (`Send/Reply Image With Caption *${prefix}removebg* to remove background of an image`);

        let rbgKEYS = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL'];
        let rbgKEY = rbgKEYS[Math.floor(Math.random() * rbgKEYS.length)];
        let filename = './remobg-'+ getRandom('');
        let qFile = Miku.downloadAndSaveMediaMessage(m.quoted, filename)
        let outputFile = await './remobeOUT-'+ getRandom('.png');

        remobg.removeBackgroundFromImageFile({
            path: qFile,
            apiKey: rbgKEY,
            size: 'regular',
            type: 'auto',
            scale: '100%',
            outputFile
        }).then(async res => {
            Miku.sendMessage(m.from, {image: fs.readFileSync(outputFile),caption:'_Created by: Miku Nakano_'}, {quoted: m});
            await fs.unlinkSync(qFile);
            await fs.unlinkSync(outputFile);
        })
    }
}

