const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../Database/dataschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
 const fs = require("fs");


module.exports = { 

    name: "daily",  
    desc: "daily gold.", 
    alias: ["daily"],
    category: "Economy",  
    react: "💰", 
    start: async ( 
        Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
         if (!m.isGroup) return Miku.sendMessage(m.from, { text: '*Group command ' }, { quoted: m });
         let user = m.sender 
         const cara = "cara"
         const daily  = await eco.daily(user, cara, 500); //give 500 for daily, can be changed
         if(daily.cd) {

            let buttons = [
                {
                  buttonId: `${prefix}wallet`,
                  buttonText: { displayText: "Wallet👛" },
                  type: 1,
                },
                {
                    buttonId: `${prefix}Bank`,
                  buttonText: { displayText: "Bank🏦" },
                  type: 1,

                },
              ];
              let buttonMessage = {
                text: `🧧 You already claimed daily for today, come back in ${daily.cdL}🫡`,
                footer: `*${botName}*`,
                buttons: buttons,
                type: 4
              };
            
              await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
            
            } else {
   
              return Miku.sendMessage( 
                m.from, 
                { text: `you claimed daily ${daily.amount} 🪙 for today🎉.` }, 
                { quoted: m } 
            )}
      }
   }
