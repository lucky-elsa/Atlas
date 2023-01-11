module.exports = {
    name: "hi",
    alias: ["hello"],
    desc: "Tells hello",
    cool:3,
    react: "🍁",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        await Miku.sendMessage(m.from,{text:`Hᴇʟʟᴏ Dᴇᴀʀ *${pushName}* I ᴀᴍ *Mɪᴋᴜ*`},{quoted:m})
    }
}
