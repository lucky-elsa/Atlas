const fs = require("fs");

module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "✨",
  category: "Core",
  start: async (Miku, m, {prefix,pushName}) => {
   var text = `Konichiwa *${pushName}* Senpai,
I am *Miku Nakano*, a bot developed by *FantoX* and his awesome team.

🔰 My prefix is:  ${prefix}

Here's the list of my Commands.\n
   `;
text +=`

`

let buttons = [
    {
      buttonId: `${prefix}repo`,
      buttonText: { displayText: "Source Code" },
      type: 1,
    },
  ];
  let buttonMessage = {
    video: fs.readFileSync('./Assets/miku.mp4'), gifPlayback: true,
    caption: text,
    footer: `*Miku Nakano*`,
    buttons: buttons,
    headerType: 4,
  };

  await Miku.sendMessage(m.from, buttonMessage, { quoted: m });

  },
};
