const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
const { getBuffer } = require("../../lib/myfunc");

module.exports = {
    name: "igdl",
    alias:["instagram","instadl","instagramdl","igvid"],
    desc: "To download an instagram video",
    category: "Media",
    usage: `igdl <video link>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args }) => {
  
      if (!args[0])
          return Miku.sendMessage(
            m.from,
            { text: `Please provide a YouTube Video link !` },
            { quoted: m }
          );
      if(!args[0].includes("instagram.com"))
          return Miku.sendMessage(
              m.from,
              { text: `Please provide a valid Instagram Video link !` },
              { quoted: m }
            );
            instagramdlv3(`${args.join(" ")}`).then(async (data) => {            
            //var buf = await getBuffer(data.thumbnail)  

            await Miku.sendMessage(m.from, { video: { url: data[0].url }, caption: `_Downloaded by:_ *Miku Nakano*`}, { quoted: m })
        }).catch((err) => {
            Miku.sendMessage(
                m.from,
                { text: mess.error },
                { quoted: m }
              );
        })
          
              }
          }

    