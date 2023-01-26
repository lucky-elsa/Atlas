module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "✨",
  category: "Core",
  start: async (Miku, m, {prefix,pushName}) => {
   var text = `Konichiwa *${pushName}* Senpai,

I am *${botName}*, a bot developed by *Team Atlas*.

🔰 My prefix is:  ${prefix}

Here's the list of my Commands.\n
   `


let buttons = [
    {
      buttonId: `${prefix}repo`,
      buttonText: { displayText: "Source Code" },
      type: 1,
    },
  ];
  let buttonMessage = {
    video: botVideo, gifPlayback: true,
    caption: text,
    footer: `*${botName}*`,
    buttons: buttons,
    headerType: 4,
  };

  await Miku.sendMessage(m.from, buttonMessage, { quoted: m });

  },
};
