const {fetchJson} = require('../../lib/myfunc')

module.exports = {
    name: "smaid",
    alias: ["safemaid","smd"],
    desc: "Get anime maid girls picture.",
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let anu = await fetchJson('');
        let randompplink = anu[Math.floor(Math.random() * anu.length)];
        Miku.sendMessage(m.from, { image: { url: randompplink.url }, caption: `Here i am Ojousama` }, { quoted: m })
        

    }
}
