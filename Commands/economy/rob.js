const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const eco = require('discord-mongoose-economy');
const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
const fs = require("fs");

module.exports = { 
    name: "rob",  
    desc: "rob bank amount", 
    alias: ["rob"],
    category: "Economy",  
    react: "💰", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
        if(m.quoted){
        var mentionedUser = m.quoted.sender;
        }else{
          var mentionedUser = mentionByTag[0];
        }
        let users = mentionByTag[0];
        if(!text && !users)  {
            return Miku.sendMessage( 
                m.from, 
                { text: `Please give me user to rob.` }, 
                { quoted: m } 
            );
        }
        const cara = "cara";
        const user1 = m.sender;
        const user2 = users;
        const k = 100;
        const amount = Math.floor(Math.random() * 200) + 1;
        const balance1 = await eco.balance(user1, cara);
        const balance2 = await eco.balance(user2, cara);
        const typ = ['ran','rob','caught'];
        const random = typ[Math.floor(Math.random() * typ.length)];
        if (k > balance1.wallet) return Miku.sendMessage(m.from, { text: '*☹️ You don\'t have enough money to pay incase you get caught*' }, { quoted: m }); 
        if (k > balance2.wallet) return Miku.sendMessage(m.from, { text: '*Sorry, your victim is too poor 🤷🏽‍♂️ let go.*' }, { quoted: m }); 

        switch (random) {
            case 'ran':
                return Miku.sendMessage(m.from, { text: `*Lets leave this poor soul alone.*` }, { quoted: m });
            case 'rob':
                await eco.deduct(user2, cara, amount);
                await eco.give(user1, cara, amount); 
                return Miku.sendMessage(m.from, { text: `*🤑 You have stolen ${amount} successfully .🗡️*` }, { quoted: m });
            case 'caught':
                await eco.deduct(user1, cara, balance1.wallet); 
                return Miku.sendMessage(m.from, { text: `*Sorry FBI👮 caught up with you, you lost all 🪙 in wallet.*` }, { quoted: m });
                default:
                return Miku.sendMessage(m.from, { text: 'What are you trying to do?' }, { quoted: m });
                }
                }
                }
