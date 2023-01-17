module.exports = {
  name: "td",
  alias: ["truthordare","truthdare"],
  desc: "what do u want",
  cool: 3,
  react: "😏",
  category: "fun",
  start: async (Miku, m, { pushName, prefix }) => {
    let buttons = [
      {
        buttonId: `${prefix}t`,
        buttonText: { displayText: "TRUTH" },
        type: 1,
      },
      {

        buttonId: `${prefix}d`,

        buttonText: { displayText: "DARE" },

        type: 1,

      },
    ];

    let buttonMessage = {
      image: { url: "https://i.ibb.co/pJVqZNy/IMG-20230113-193233.jpg" },
      caption: `What do you want truth or dare?😼 *${pushName}* Senpai 🫣 ?\n`,
      footer: `*ᴍɪᴋᴜ ɴᴀᴋᴀɴᴏ*`,
      buttons: buttons,
      headerType: 4,
    };

    await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
