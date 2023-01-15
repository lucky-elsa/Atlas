const { getBuffer } = require("../../lib/myfunc");

module.exports = {
  name: "hmiku",
  alias: ["nsfwmiku", "hentaimiku", "henmiku"],
  desc: "Hentai picture of miku",
  category: "Weeb",
  usage: `cosplay`,
  react: "🍁",
  start: async (Miku, m, { prefix }) => {
    let Image = await getBuffer(`https://mikuhentai-api.onrender.com/`);
    let Button = [
      {
        buttonId: `${prefix}hmiku`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let bmffg = {
      image: Image,
      caption: `Hentai-Miku API by *FantoX*\n\n*API link:* https://shubhapratimbiswas.tech\n`,
      footer: `Miku Nakano`,
      buttons: Button,
      headerType: 4,
    };
    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
