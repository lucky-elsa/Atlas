const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { player, axe } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
const fs = require("fs");



module.exports = {
    name: "mine",
    alias: ["hunt", "dig", "chop"],
    desc: "Gives all bot commands list",
    react: "🔨",
    category: "Core",
    start: async (Miku, m, {prefix,pushName}) => {
     var text = `Konichiwa *${pushName}* Senpai,
  
  I am *${botName}*, a bot developed by *Team Atlas*.`
  let user = await player.findOne({id:m.sender});
  if(!user) {
    return Miku.sendMessage(m.from, { text:` 😕 You don't have an inventory. Use ${prefix}reg-inv to register.` }, { quoted: m });
  }
  let inventory = user.inventory;
  
const sections = [{
    "title": "🔖１． ＷＯＯＤＥＮＡＸＥ",
    "rows": [
        {
            "title": `${prefix}mine`,
            "description": `${inventory.woodenaxe}`,
            "rowId": `${prefix}hunt2 woodenaxe`
        }
       ]
   },
        {
           "title": "🔖２． ＩＲＯＮＰＩＣＫＡＸＥ",
    "rows": [
        {
            "title": `${prefix}mine`,
            "description": `${inventory.ironpickaxe}`,
            "rowId": `${prefix}hunt2 ironpickaxe`
        }
       ]
   },
        {
           "title": "🔖３． ＳＴＯＮＥＰＩＣＫＡＸＥ",
    "rows": [
        {
            "title": `${prefix}mine`,
            "description": `${inventory.stonepickaxe}`,
            "rowId": `${prefix}hunt2 stonepickaxe`
        }
       ]
   },
        {
           "title": "🔖４． ＤＩＡＭＯＮＤＰＩＣＫＡＸＥ",
    "rows": [
        {
            "title": `${prefix}mine`,
            "description": `${inventory.diamondpickaxe}`,
            "rowId": `${prefix}hunt2 diamondpickaxe`
        }
    ]
}
]
let con = `
Hello, 
1 | Please select an axe you want to use for mining.
`
let ments = [m.sender]
let fot = `Powered BY LOVE
`
const listMessage = {
video: botVideo, gifPlayback: true,
footer: fot,
text: 'Made By TEAM ATLAS',
title: con,
buttonText: `🅲🅻🅸🅲🅺 🅷🅴🆁🅴 ⎙`,
mentions: ments, 
headerType: 4,
sections
}
const sendMsg = await Miku.sendMessage(m.from, listMessage,{ quoted:m })

    }
}
