module.exports = {
    name: "hi",
    alias: ["hello"],
    desc: "Tells hello",
    cool:3,
    react: "🍁",
    category: "General",
    start: async(Miku, m,{pushName}) => {
        await Miku.sendMessage(m.from,{text:`Hello ${pushName}`},{quoted:m})
    }
}