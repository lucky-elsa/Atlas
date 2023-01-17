const {fetchJson} =require("../../lib/myfunc")

module.exports = {
    name: "animestory",
    alias: ["animestorysearch"],
    desc: "To get an anime story search result",
    category: "Search",
    usage: `animestory <search term>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args }) => {
        if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a anime name to search !` },
        { quoted: m }
      );

      var AnimesearchTerm = args.join(" ");
      await fetchJson(`https://api.jikan.moe/v4/anime?q=${AnimesearchTerm}`)
      .then((res) =>{
        console.log(res)   
        let sections = []   
          for (let i of res.data) {
          const list = {title: `${i.title}`,
          rows: [
                {
                 title: `${i.title_english}\n\n`, 
                 rowId: `${prefix}animesearch ${i.mal_id}`,
                 description: `${i.synopsis}`
                }, 
                ]
             }
             sections.push(list)   
             }
             const sendm =  Miku.sendMessage(
                m.from, 
                {
                 text: `_🎀 Search Term:_ *${AnimesearchTerm}*\n\n`,
                 footer: "Miku Nakano",
                 title: "*『  Anime Story Search  』*\n\n",
                 buttonText: "Search Results",
                 sections
                }, { quoted : m }
              )

            })
        }
    }