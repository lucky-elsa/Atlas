require("../../config.js");
require("../../core.js");

module.exports = {
  name: "promote",
  alias: ["prom"],
  desc: "Promote a member",
  category: "Group",
  usage: "[@user]",
  start: async (
    Miku,
    m,
    { text, prefix, isBotAdmin, isAdmin, mentionByTag,pushName,}
  ) => {
    if (!text)
      return Miku.sendMessage(
        m.from,
        { text: `Please tag a user to promote!` },
        { quoted: m }
      );
    if (!isAdmin)
      return Miku.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    const mentionedUser = mentionByTag;
    let users = (await mentionedUser[0]) || m.msg.contextInfo.participant;

    try {
      await Miku.groupParticipantsUpdate(m.from, [users], "promote").then(
        (res) =>
          Miku.sendMessage(
            m.from,
            { text: `User has been *Promoted* Successfully! by *${pushName}*` },
            { quoted: m }
          )
      );
    } catch (err) {
      Miku.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
