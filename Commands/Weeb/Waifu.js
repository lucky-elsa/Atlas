module.exports = {
    name: "pervert",
    alias: ["perv","gay","handsome","hot","sexy","ugly","cute","playboy","playgirl","beautiful","lesbian","whore","motherfucker","sucker","horny","foolish","nibba","nibbi","bitch","waifu","crackhead","rascal","idiot","girlyboy","tomboy","gigachad","mf","sigma","psycho","brainless","useless"],
    desc: "character fun",
    cool:2,
    react: "😍",
    category: "Fun",
    start: async(Miku, m,{text, prefix}) => {

    
                      if (!m.isGroup) return m.reply(`${mess.group}`)
                      let member = participants.map(u => u.id)
                      let me = m.sender
                      let jodoh = member[Math.floor(Math.random() * member.length)]
                      let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
                      let ments = [me, jodoh]
                      let buttons = [
                                  { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 69 }
                              ]
                              await Miku.sendButtonText(m.chat, buttons, jawab, BotName, m, {mentions: ments})
                      

}
}
