module.exports = {
    name: "hi",
    alias: ["hello"],
    desc: "Tells hello",
    cool:3,
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        await Miku.sendMessage(m.from,{text:`Hᴇʟʟᴏ *${pushName}* I ᴀᴍ *Mɪᴋᴜ*`},{quoted:m})
    }
}
