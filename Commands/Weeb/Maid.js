const {fetchJson} = require('../../lib/myfunc')

module.exports = {
    name: "smaid",
    alias: ["safemaid","smd"],
    desc: "Get anime maid girls picture.",
    react: "🍁",
    category: "Weeb",
    start: async(Miku, m,{pushName,prefix}) => {
        let maids = await fetchJson('https://raw.githubusercontent.com/NekoSenpai69/Database/main/maid.json');
        let randomlink = maids[Math.floor(Math.random() * maids.length)];


var Button = [
      {
        buttonId: `${prefix}smd`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];
    let neko = {
      image: {url:randomlink.url},
      caption: `Here I am Oujou...Sama...!!`,
      footer: `*${botName}*`,
      buttons: Button,
      headerType: 4,
    };
    await Miku.sendMessage(m.from, neko, { quoted: m }).catch((err) => {
      return "Error!";
    });
}, 
};
