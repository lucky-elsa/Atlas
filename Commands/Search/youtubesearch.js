const yts = require('youtube-yts');

module.exports = {
    name: "youtubesearch",
    alias: ["yts"],
    desc: "To search a video on YouTube",
    category: "Search",
    usage: `yts <search term>`,
    react: "🍁",
    start: async (Miku, m, { text, prefix, args }) => {
      if (!args[0])
        return Miku.sendMessage(
          m.from,
          { text: `Please provide a search term !` },
          { quoted: m }
        );
        let search = await yts(text);
        var resText = `       *『  YouTube Search Engine  』*\n\n\n_🔍 Search Term:_ *${args.join(" ")}*\n\n\n`
            let count = 1;
        for(let num of search.all){
            resText += `\n_📍 Result:_ *${count}*\n\n_🎀 Title:_ *${num.title}*\n\n_🔶 Views:_ *${num.views}*\n\n_🎗️ Duration:_ *${num.timestamp}*\n\n_🍁 Uploaded on:_ *${num.ago}*\n\n_🔷 Link:_ *${num.url}*\n\n\n`;
            count++;
        }
        await Miku.sendMessage(m.from,{image:{url:search.all[0].thumbnail},caption:resText},{quoted:m})

    }}