const axios = require("axios");

module.exports = {
  name: "stickersearch",
  alias: ["getsticker", "searchsticker"],
  desc: "To search any sticker",
  category: "Search",
  usage: `stickersearch <search term>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args,pushName }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a Search Term !` },
        { quoted: m }
      );
    var gifSearchTerm = args.join(" ");
    const gif = await axios.get(
      `https://tenor.googleapis.com/v2/search?q=${gifSearchTerm}&key=${tenorApiKey}&client_key=my_project&limit=8&media_filter=gif`
    );

    let result = Math.floor(Math.random() * 8);
    let gifUrl = gif.data.results[result].media_formats.gif.url;
    //console.log(gifUrl);

        await Miku.sendVideoAsSticker(m.from, gifUrl, m, { packname: packname, author: pushName });
      
  },
};
