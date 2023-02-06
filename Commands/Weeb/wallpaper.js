const fs = require("fs");
require("../../config.js");
require("../../Core.js");
const { AnimeWallpaper } = require("anime-wallpaper");
const wall = new AnimeWallpaper();
module.exports = {
  name: "wallpaper",
  alias: ["animewallpaper"],
  usage: `${prefa}allpaper <query>`,
  desc: "Gives you the wallpaper...",
  category: "Weeb",
  react: "✅",

  start: async (Miku, m, { command, prefix, text, args }) => {
    const im = args.join(" ").split("#");
    const noi = Number(im[1]);
    if (!im[0]) return m.reply("No wallpaper found...");
    if (!im[1]) {
      const pages = [1, 2, 3, 4];
      const random = pages[Math.floor(Math.random() * pages.length)];
      const wallpaper = await wall
        .getAnimeWall4({
          title: im[0],
          type: "sfw",
          page: pages,
        })
        .catch(() => null);
      const i = Math.floor(Math.random() * wallpaper.length);

      let buttons = [
        {
          buttonId: `${prefix}wallpaper ${im[0]}`,
          buttonText: {
            displayText: ">>",
          },
          type: 1,
        },
      ];

      let buttonMessage = {
        image: {
          url: wallpaper[i].image,
        },
        caption: `*Search term:* ${im[0]}`,
        footer: `*${botName}*`,
        buttons: buttons,
        headerType: 4,
      };
      Miku.sendMessage(m.from, buttonMessage, {
        quoted: m,
      });
    }
  },
};
