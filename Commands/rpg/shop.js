const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { player } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
const fs = require("fs");


module.exports = {
    name: "shop",
    desc: "To view the list of items available in the shop",
    alias: ["store"],
    category: "Shop",
    usage: "shop",
    react: "🛍",
    start: async (Miku, m, { text, prefix, botName}) => {
        Miku.sendMessage(m.from, { text: `🛍️ 💎 ${global.botName} STORE 💎 🛍️

        👋 Hi there! 🤗 Welcome to the ${global.botName} Store.💼 Here's what you can purchase using Gold 💰:
        
#1
💡 Item: Wooden-Axe
💰 Cost: 250 Gold
💻 Usage: ${prefix}buy woodenaxe
💬 Description: Chop down those trees for some juicy loot! 🌳
        
#2
💡 Item: Stone-Pickaxe
💰 Cost: 500 Gold
💻 Usage: ${prefix}buy stonepickaxe
💬 Description: Mine to your heart's content with this pickaxe! 💎
        
#3
💡 Item: Iron-Pickaxe
💰 Cost: 2000 Gold
💻 Usage: ${prefix}buy ironpickaxe
💬 Description: Mine like a pro with this top-notch pickaxe! 🔨
        
#4
💡 Item: Diamond-Pickaxe
💰 Cost: 5000 Gold
💻 Usage: ${prefix}buy diamondpickaxe
💬 Description: The ultimate mining experience awaits!\nUsing this axe you can get a *🍎GoldenApple🍎*(very rare) 💎💰` }, { quoted: m });


    }
}
