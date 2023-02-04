const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { shop, player, axe } = require("../../Database/rpgschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
const fs = require("fs");



module.exports = {
    name: "hunt",
    desc: "Hunt, mine, dig or chop for resources.",
    alias: ["hunt", "mine", "dig", "chop"],
    category: "Mine",
    usage: "hunt/mine/dig/chop",
    react: "🔨",
    start: async (Miku, m, { text, prefix }) => {
        let user = await player.findOne({id:m.sender});
        if(!user) {
            return Miku.sendMessage(m.from, { text:` 😕 You don't have an inventory. Use ${prefix}reg-inv to register.` }, { quoted: m });
        }
        if(!user.inventory.woodenaxe && !user.inventory.woodpickaxe && !user.inventory.stonepickaxe && !user.inventory.ironpickaxe && !user.inventory.diamondpickaxe){
            return Miku.sendMessage(m.from, { text:` 😕 Yous don't have any mining equipment. Use ${prefix}buy to purchase one.` }, { quoted: m });
        }
        let axeUsed = "woodenaxe";
            if(user.inventory.woodenaxe){
            user.inventory.woodenaxe -= 1;
            let loot = {
            wood: Math.floor(Math.random() * 4) + 8,
            stone: Math.floor(Math.random() * 2) + 2,
            iron: Math.floor(Math.random() * 1) + 1,
            diamonds: Math.floor(Math.random() * 1)
            }
            user.inventory.wood += loot.wood;
            user.inventory.stone += loot.stone;
            user.inventory.iron += loot.iron;
            user.inventory.diamonds += loot.diamonds;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ 🐺MINE RESULT🐺 ]\n\n used: ${axeUsed}\n\n *🔮Stone*: ${loot.stone}\n*🔥Wood*: ${loot.wood}\n*🔩Iron*: ${loot.iron}\n*💎Diamonds*: ${loot.diamonds}`}, { quoted: m });
            }
            else if(user.inventory.woodpickaxe) {
            user.inventory.woodpickaxe -= 1;
            let loot = {
            wood: Math.floor(Math.random() * 2) + 4,
            stone: Math.floor(Math.random() * 2) + 2,
            iron: Math.floor(Math.random() * 1) + 1,
            diamonds: Math.floor(Math.random() * 1)
            }
            axeUsed = "woodpickaxe"
            user.inventory.wood += loot.wood;
            user.inventory.stone += loot.stone;
            user.inventory.iron += loot.iron;
            user.inventory.diamonds += loot.diamonds;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ 🐺MINE RESULT🐺 ]\n\n  used: ${axeUsed}\n\n *🔮Stone*: ${loot.stone}\n*🔥Wood*: ${loot.wood}\n*🔩Iron*: ${loot.iron}\n*💎Diamonds*: ${loot.diamonds}`}, { quoted: m });
            }
            else if(user.inventory.stonepickaxe) {
            user.inventory.stonepickaxe -= 1;
            let loot = {
            wood: Math.floor(Math.random() * 1) + 2,
            stone: Math.floor(Math.random() * 3) + 4,
            iron: Math.floor(Math.random() * 1) + 1,
            diamonds: Math.floor(Math.random() * 1)
            }
            axeUsed = "stonepickaxe"
            user.inventory.wood += loot.wood;
            user.inventory.stone += loot.stone;
            user.inventory.iron += loot.iron;
            user.inventory.diamonds += loot.diamonds;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ 🐺MINE RESULT🐺 ]\n\n used: ${axeUsed}\n\n 🔮Stone: ${loot.stone}\n🔥Wood: ${loot.wood}\n🔩Iron: ${loot.iron}\n💎Diamonds: ${loot.diamonds}`}, { quoted: m });
            }
            else if(user.inventory.ironpickaxe) {
            user.inventory.ironpickaxe -= 1;
            let loot = {
            wood: Math.floor(Math.random() * 1) + 1,
            stone: Math.floor(Math.random() * 2) + 2,
            iron: Math.floor(Math.random() * 3) + 4,
            diamonds: Math.floor(Math.random() * 1)
            }
            axeUsed = "ironpickaxe"
            user.inventory.wood += loot.wood;
            user.inventory.stone += loot.stone;
            user.inventory.iron += loot.iron;
            user.inventory.diamonds += loot.diamonds;
            await user.save();
            Miku.sendMessage(m.from, { text: `[ 🐺MINE RESULT🐺 ]\n\n
            used: ${axeUsed}\n\n 🔮Stone: ${loot.stone}\n🔥Wood: ${loot.wood}\n🔩Iron: ${loot.iron}\n💎Diamonds: ${loot.diamonds}`}, { quoted: m });
            }
            else if(user.inventory.diamondpickaxe) {
                user.inventory.diamondpickaxe -= 1;
                let loot = {
                wood: Math.floor(Math.random() * 1),
                stone: Math.floor(Math.random() * 2) + 2,
                iron: Math.floor(Math.random() * 2) + 2,
                diamonds: Math.floor(Math.random() * 1001) + 7000
                }
                axeUsed = "diamondpickaxe"
                user.inventory.wood += loot.wood;
                user.inventory.stone += loot.stone;
                user.inventory.iron += loot.iron;
                user.inventory.diamonds += loot.diamonds;
                await user.save();
                Miku.sendMessage(m.from, { text: `[ 🐺MINE RESULT🐺 ]\n\n used: ${axeUsed}\n\n 🔮Stone: ${loot.stone}\n🔥Wood: ${loot.wood}\n🔩Iron: ${loot.iron}\n💎Diamonds: ${loot.diamonds}`}, { quoted: m });
                }
            else {
            Miku.sendMessage(m.from, { text: `😕 You don't have any mining equipment. Use ${prefix}buy to purchase one. `}, { quoted: m });
            }
        }
    }


    
