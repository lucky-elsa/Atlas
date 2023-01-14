const wikiPediaSearch = require("wikipedia")

module.exports = {
  name: "wikipedia",
  alias: ["wiki"],
  desc: "To search any topic in Wikipedia",
  category: "Search",
  usage: `wiki <search term>`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a Search Term !` },
        { quoted: m }
      );
    var wikiSearchTerm = args.join(" ");

    const wikiResult = await wikiPediaSearch.summary(wikiSearchTerm)
console.log(wikiResult)
    let resText = `        *『  ⚡️ Wikipedia Search ⚡️  』*\n\n\n_Search Term:_ *${wikiSearchTerm}*\n\n\n*Result:* \n\n${wikiResult}\n\n`;

    await Miku.sendMessage(
      m.from,
      {
        image: {
          url: "https://scontent.fccu1-2.fna.fbcdn.net/v/t1.6435-9/67269826_645815815886259_7144176732478636032_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=QNeAiScuX_UAX_aHAnJ&_nc_ht=scontent.fccu1-2.fna&oh=00_AfBZ44juF2c4c5KlEM6lt2QGs3NnNoF8fBFhXtUF45Eg9w&oe=63EA00B5",
        },
        caption: resText,
      },
      { quoted: m }
    );
  },
};
