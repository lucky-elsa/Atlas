const mongoose = require("mongoose");
require("../../config.js");
require("../../index.js");
require("../../lib/myfunc.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
 const fs = require("fs");
const { M } = require("human-readable");


 module.exports = { 

    name: "gamble",  
    desc: "gamble money.", 
    alias: ["gamble"],
    category: "Economy",  
    react: "💰", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
        const user = m.sender
	//	if(citel.chat!=="120363043857093839@g.us") return citel.reply('This is not a economy group.')
        var texts = text.split(" ");
     var opp = texts[1];// your value
     var value = texts[0].toLowerCase();
     var gg = parseInt(value)
 ///.mentionedJid[0] ? m.mentionedJid[0] : m.sender
     const cara = "cara"
     const balance = await eco.balance(user, cara);
     const g = (balance.wallet) > parseInt(value)
     const k = 50
     const a = (k) > parseInt(value)
     const twice = gg*2
     const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
     const r = f[Math.floor(Math.random () * f.length)]
     if (!text) return m.reply(
				`Example:  ${prefix}gamble 100 direction(left,right,up,down)`
			);

            if (!value) return m.reply("*Please, specify the amount you are gambling with!*");
            if (!opp) return m.reply("*Specify the direction you are betting on!*");
            if (!gg) return m.reply("*Check your text please, You are using the command in a wrong way*")
            if (g == false) return m.reply(`*You don't have sufficient 🪙 Diamond to gamble with*`);
        if (a == true) return m.reply(`*Sorry ${m.pushName}, you can only gamble with more than 🪙50.*`);
        if ( r == opp){
           let give = await eco.give(user , cara, twice);
           let buttons = [
            {
              buttonId: `${prefix}slot`,
              buttonText: { displayText: "Slot🎰" },
              type: 1,
            },
            {
                buttonId: `${prefix}wallet`,
              buttonText: { displayText: "Wallet👛" },
              type: 1,

            },
          ];
          let buttonMessage = {
            text: `*📈 You won 🪙${twice}*`,
            footer: `*${botName}*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
         else{
         let deduct = await eco.deduct(user, cara, texts[0]);
         let buttons = [
            {
              buttonId: `${prefix}slot`,
              buttonText: { displayText: "Slot🎰" },
              type: 1,
            },
            {
                buttonId: `${prefix}wallet`,
              buttonText: { displayText: "Wallet👛" },
              type: 1,

            },
          ];
          let buttonMessage = {
            text: `*📉 You lost 🪙${texts[0]}*`,
            footer: `*${botName}*`,
            buttons: buttons,
            type: 4
          };
        
          await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
        }
    }
}