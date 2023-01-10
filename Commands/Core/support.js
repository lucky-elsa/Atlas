module.exports = {
    name: "support",
    alias: ["supportgc"],
    desc: "Sends support group link.",
    cool:3,
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        await Miku.sendMessage(m.from,{text:`*My developer's group:* gg.gg/MikuSupport`},{quoted:m})
    }
}