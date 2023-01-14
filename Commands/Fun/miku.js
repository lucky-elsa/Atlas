module.exports = {
  name: "miku",
  alias: ["Miku"],
  desc: "what do u want",
  cool: 3,
  react: "🫣",
  category: "fun",
  start: async (Miku, m, { pushName, prefix }) => {
    let buttons = [
      {
        buttonId: `${prefix}loveu`,
        buttonText: { displayText: "I Lᴏᴠᴇ Yᴏᴜ Mɪᴋᴜ ♥️" },
        type: 1,
      },
      {

        buttonId: `${prefix}help`,

        buttonText: { displayText: "HELP" },

        type: 1,

      },
    ];

    let buttonMessage = {
      image: { url: "https://i.ibb.co/pJVqZNy/IMG-20230113-193233.jpg" },
      caption: `How can i help you *${pushName}* senpai 🫣 ?\n`,
      footer: `*ᴍɪᴋᴜ ɴᴀᴋᴀɴᴏ*`,
      buttons: buttons,
      headerType: 4,
    };

    await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
