require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "remove",
  alias: ["rem"],
  desc: "Remove a member from group",
  category: "Group",
  usage: "remove @user",
  react: "🍁",
  start: async (
    Miku,
    m,
    { text, prefix, isBotAdmin, isAdmin, mentionByTag,pushName}
  ) => {
    if (!text)
      return Miku.sendMessage(
        m.from,
        { text: `Please tag a user to *Remove* from group!` },
        { quoted: m }
      );
    if (!isAdmin)
      return Miku.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    const mentionedUser = mentionByTag;
    let users = (await mentionedUser[0]) || m.msg.contextInfo.participant;

    try {
      await Miku.groupParticipantsUpdate(m.from, [users], "remove").then(
        (res) =>
          Miku.sendMessage(
            m.from,
            { text: `User has been *Removed* Successfully by *${pushName}*` },
            { quoted: m }
          )
      );
    } catch (err) {
      Miku.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
