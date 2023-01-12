module.exports = {
    name: "iloveumiku",
    alias: ["loveu"],
    desc: "proposed",
    cool:3,
    react: "❤",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        await Miku.sendMessage(m.from,{text:`I love u too *${pushName}*`},{quoted:m})
    }
}
