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

    name: "set-money",  
    desc: "give money to user.", 
    alias: ["give"],
    category: "economy",  
    react: "💰", 
    start: async ( 
        Miku, 
        m, 
        { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator} 
    ) => {
        var modStatus = await mku.findOne({id:m.sender}).then(async (user) => {
            if (user.addedMods=="true") {
              return "true";
            }
            else{
              return "false";
            }
          }).catch(error => {
            console.log(error)
            //return Miku.sendMessage(m.from, { text: `An internal error occurred while checking your mod status.` }, { quoted: m });
          });
    
    
          if (modStatus=="false"&&!isCreator)  return Miku.sendMessage(m.from, { text: 'Sorry, only my *Owner* and *Mods* can use this command !' }, { quoted: m });
          //var TaggedUser = mentionByTag[0];
    
          if (!text && !m.quoted) {
            return Miku.sendMessage( 
              m.from, 
              { text: `Please tag a user` }, 
              { quoted: m } 
            )}
            else if(m.quoted){
              var mentionedUser = m.quoted.sender;
            }
            else{
              var mentionedUser = mentionByTag[0];
            }
            let users = mentionByTag[0];
         let value = text.trim().split(" "); 
        const cara = "cara"
        const user1 = m.sender
        const user2 = users
        const word = value[0];
        if(!users) return m.reply('Please give me user to add money.')
        const balance = await eco.balance(user2, cara);
        const give = await eco.give(user2, cara, value[0]);
       return m.reply(`*Successfully added 💎${give.amount} to his wallet🛸.*`)

   }
 }