const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { player } = require("../../Database/rpgschema.js");

module.exports = {
    name: "reg-inv",
    desc: "Register your inventory.",
    alias: ["register-inv"],
    category: "RPG",
    usage: "register",
    start: async (Miku, m, { text, prefix }) => {
        let user = await player.findOne({id:m.sender});
        if(!user){
            await player.create({id:m.sender, inventory: {wood: 0, stone: 0, iron: 0, diamonds: 0, diamondpickaxe: 0, ironpickaxe: 0, stonepickaxe: 0, woodenaxe: 0,  goldenApple: 0 }});
            Miku.sendMessage(m.from, { text: `📦 Inventory created! Use ${prefix}inventory to view your inventory.` }, { quoted: m });
        } else {
            Miku.sendMessage(m.from, { text: `📦 You already have an inventory. Use ${prefix}inventory to view it.` }, { quoted: m });
        }
    }
}
