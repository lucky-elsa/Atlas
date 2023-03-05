const axios = require("axios");
module.exports = {
  name: "github",
  alias: ["gh"],
  desc: "Search an username on github",
  category: "Search",
  usage: `gh <github username>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, pushName, args,mime }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a GitHub username !` },
        { quoted: m }
      );
    var newGCdesc = args.join(" ");

    var GHuserInfo = await axios
      .get(`https://api.github.com/users/${newGCdesc}`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
    let GhUserPP = GHuserInfo.avatar_url;
    let resText = `        *🏮 GitHub User Info 🏮*\n\n_🎀 Username:_ *${GHuserInfo.login}*\n_🧩 Name:_ *${GHuserInfo.name}*\n\n_🧣 Bio:_ *${GHuserInfo.bio}*\n\n_🍁 Total Followers:_ *${GHuserInfo.followers}*\n_🔖 Total Public Repos:_ *${GHuserInfo.public_repos}*\n_📌 Website:_ ${GHuserInfo.blog}\n`;

    await Miku.sendMessage(
      m.from,
      {
        image: { url: GhUserPP, mimetype: "image/jpeg" },
        caption: resText,
      },
      { quoted: m }
    );
  },
};
