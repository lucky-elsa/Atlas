module.exports = {
    name: "retrieve",
    alias: ["retrive","retrieveimage"],
    desc: "To retrieve a view once image.",
    category: "Image Manipulation",
    usage: "retrieve <reply to view once image>",
    react: "🍁",
    start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {
        if(!m.quoted) return m.reply('Please mention a view once image !');
        let mess = await quoted.download().viewOnceMessage;
        Miku.sendMessage(m.from, {image:mess,caption: "_Created by:_ *Miku Nakano*"}, { quoted: m })
        if (/image/.test(mess))
        {
            Miku.sendMessage(m.from, {image:mess,caption: "_Created by:_ *Miku Nakano*"}, { quoted: m })
        }
        else if (/video/.test(mess))
        {
            Miku.sendMessage(m.from, {video:mess,caption: "_Created by:_ *Miku Nakano*"}, { quoted: m })
        }
        else 
        {
            m.reply('Please mention a view once image !');
        }
    }
}