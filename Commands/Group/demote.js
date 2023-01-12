require("../../config.js");
require("../../core.js");

module.exports = {
  name: "demote",
  alias: ["dem"],
  desc: "Demote a member",
  category: "Group",
  usage: "[demote @user]",
  react: "🍁",
  start: async (
    Miku,
    m,
    { text, prefix, isBotAdmin, isAdmin, mentionByTag,pushName}
  ) => {
    if (!text)
      return Miku.sendMessage(
        m.from,
        { text: `Please tag a user to *Demote*!` },
        { quoted: m }
      );
    if (!isAdmin)
      return Miku.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    const mentionedUser = mentionByTag;
    let users = (await mentionedUser[0]) || m.msg.contextInfo.participant;

    try {
      await Miku.groupParticipantsUpdate(m.from, [users], "demote").then(
        (res) =>
          Miku.sendMessage(
            m.from,
            { text: `User has been *Demoted* Successfully by *${pushName}*` },
            { quoted: m }
          )
      );
    } catch (err) {
      Miku.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
