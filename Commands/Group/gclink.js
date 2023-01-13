require("../../config.js");
require("../../Core.js");

module.exports = {
  name: "grouplink",
  alias: ["gclink"],
  desc: "To get concurrent group link.",
  category: "Group",
  usage: "gclink",
  react: "🍁",
  start: async (
    Miku,
    m,
    { prefix, isBotAdmin, isAdmin, metadata }
  ) => {
    if (!isAdmin)
      return Miku.sendMessage(m.from, { text: mess.useradmin }, { quoted: m });

    var link = await Miku.groupInviteCode(m.from);
    var linkcode = `https://chat.whatsapp.com/${link}`;

    try {
      ppgc = await Miku.profilePictureUrl(m.from, "image");
    } catch {
      ppgc = "https://wallpapercave.com/wp/wp10524580.jpg";
    }

    try {
      await Miku.sendMessage(
        m.from,
        {
          image: { url: ppgc, mimetype: "image/jpeg" },
          caption: `_🔶 Group Name:_ *${metadata.subject}*\n\n_🔷 Group Link:_ ${linkcode}`,
        },
        { quoted: m }
      );
    } catch (err) {
      Miku.sendMessage(m.from, { text: `${mess.botadmin}` }, { quoted: m });
    }
  },
};
