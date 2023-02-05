const { hentai } = require('../../lib/scrapper2.js')

module.exports = {
  name: "hentaivideo",
  alias: ["hvideo"],
  desc: "Get a hetai video", 
  category: "Nsfw",
  usage: `hvideo`,
  react: "🍁",
  start: async (Miku, m, { prefix,NSFWstatus }) => {

    if (NSFWstatus == "false") return m.reply(`This group is not NSFW enabled!\n\nTo configure NSFW mode, type:\n\n*${prefix}nsfw*`);
    m.reply(mess.waiting)

    hvid = await hentai()
    res = hvid[Math.floor(Math.random(), hvid.length)]
    Miku.sendMessage(m.from, { video: { url: res.video_1 }, caption: `\nTitle : ${res.title}\n\nCategory : ${res.category}\n\nMedia Url : ${res.video_1}\n` }, { quoted: m })
  }
}
