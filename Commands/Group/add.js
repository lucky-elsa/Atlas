require("../../config.js");
require("../../core.js");

module.exports = {
  name: "add",
  alias: ["adduser"],
  desc: "Add a member in group",
  category: "Group",
  usage: "[add 918145654575  (Here 91 is country code)]",
  react: "🍁",
  start: async (
    Miku,
    m,
    { text, prefix, isBotAdmin, isAdmin, mentionByTag,pushName}
  ) => {
    if (!text)
      return Miku.sendMessage(
        m.from,
        { text: `Please give me a number to add!` },
        { quoted: m }
      );
    if (!isAdmin)
      return Miku.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    const mentionedUser = mentionByTag;
    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

    try {
      await Miku.groupParticipantsUpdate(m.from, [users], "add").then(
        (res) =>
          Miku.sendMessage(
            m.from,
            { text: `User has been *Added* Successfully by *${pushName}*` },
            { quoted: m }
          )
      );
    } catch (err) {
      Miku.sendMessage(m.from, { text: `Failed to add! Either bot is not admin or user has group adding restriction.` }, { quoted: m });
    }
  },
};
