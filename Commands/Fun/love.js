module.exports = {
  name: "loveu",
  alias: ["iloveumiku"],
  desc: "what do u want",
  cool: 3,
  react: "🫣",
  category: "fun",
  start: async (Miku, m, { pushName, prefix }) => {
    let buttons = [
      {
        buttonId: `${prefix}hmiku`,
        buttonText: { displayText: "Mʏ ʜᴇɴᴛᴀɪ ᴘɪᴄs😜🤭" },
        type: 1,
      },
      
    ];

    let buttonMessage = {
      image: { url: "https://iili.io/HYpy0wG.png" },
      caption: `Oʜ ʀᴇᴀʟʟʏ!! I Lᴏᴠᴇ Yᴏᴜ Tᴏᴏ *${pushName}* Sᴇɴᴘᴀɪ💖❣️
Dᴏ Yᴏᴜ Wᴀɴɴᴀ Sᴇᴇ Mʏ Hᴇɴᴛᴀɪ Pɪᴄs *${pushName}* Sᴇɴᴘᴀɪ 🫣 ?\n`,
      footer: `*ᴍɪᴋᴜ ɴᴀᴋᴀɴᴏ*`,
      buttons: buttons,
      headerType: 4,
    };

    await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
  },
};
