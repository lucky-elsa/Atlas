const { lyricsv2 } = require("@bochilteam/scraper");

module.exports = {
  name: "lyrics",
  alias: ["songlysics"],
  desc: "To get any song lyrics",
  category: "Search",
  usage: `lyrics <song name>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a Search Term !` },
        { quoted: m }
      );
    var LyricssearchTerm = args.join(" ");

    const resultlyrics = await lyricsv2(LyricssearchTerm).catch(
      async (_) => await lyrics(LyricssearchTerm)
    );

    let resText = `  *『  ⚡️ Lyrics Search Engine ⚡️  』*\n\n\n_Search Term:_ *${LyricssearchTerm}*\n\n\n*📍 Lyrics:* \n\n${resultlyrics.lyrics}\n\n`;

    await Miku.sendMessage(
      m.from,
      {
        image: {
          url: "https://wallpapercrafter.com/th800/122315-5-toubun-no-Hanayome-Nakano-Miku-Idol-microphone-blue-eyes-anime-anime-girls.jpg",
        },
        caption: resText,
      },
      { quoted: m }
    );
  },
};
