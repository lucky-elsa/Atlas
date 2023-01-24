require("../../config.js");
require("../../Core.js");

module.exports = {
    name: "pervert",
    alias: ["perv","gay","handsome","hot","sexy","ugly","cute","playboy","playgirl","beautiful","lesbian","whore","motherfucker","sucker","horny","foolish","nibba","nibbi","bitch","waifu","crackhead","rascal","idiot","girlyboy","tomboy","gigachad","mf","sigma","psycho","brainless","useless"],
    desc: "character fun",
    cool:2,
    react: "🤣",
    category: "Fun",
    start: async(Miku, m,{prefix,participants}) => {
        let member = participants.map(u => u.id)
                      let random = member[Math.floor(Math.random() * member.length)]
                      let command_name = m.text.substring(prefix.length).split(" ")[0];
                      let ments = [random]
                      await Miku.sendMessage(m.from, {text:`The Most ${command_name} Here Is @${random.split('@')[0]}`, mentions: ments },{quoted:m})
    }
}
