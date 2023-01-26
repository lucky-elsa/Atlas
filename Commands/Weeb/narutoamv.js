const { getBuffer } = require("../../lib/myfunc");

module.exports = {
  name: "narutoamv",
  alias: ["narutovid","narutoedit" ],
  desc: "To get a random Naruto AMV",
  category: "Weeb",
  usage: `narutoamv`,
  react: "🍁",
  start: async (Miku, m, { prefix }) => {
    var narutoVID = await getBuffer(`https://kai-naruto-api.onrender.com/`);
    var cosplayButton = [
      {
        buttonId: `${prefix}narutoamv`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let bmffg = {
      video: narutoVID,
      gifPlayback:true,
      caption: `Naruto AMV API by *Team Atlas*\n\n*API link:* https://shubhapratimbiswas.tech\n`,
      footer: `*${botName}*`,
      buttons: cosplayButton,
      headerType: 4,
    };
    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
