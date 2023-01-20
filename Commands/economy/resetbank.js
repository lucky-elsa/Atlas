const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mk } = require("../../lib/dataschema.js");
const eco = require('discord-mongoose-economy')
const ty = eco.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority');
 const fs = require("fs");


module.exports = {
    name: "reset-bank",  
    desc: "reset wallet of quoted user.", 
    alias: ["reset-bank"],
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
    let user1 = m.sender
    let user2 = mentionByTag[0];
    let value = text.trim().split(" ");
    const cara = 'cara'
    if(!user2) return Miku.sendMessage(m.from, { text: 'Please give me user.' }, { quoted: m });
    const balance  = await eco.balance(user1, "cara")
    const withdraw = await eco.withdraw(user2, cara, value[0]);
    const deduct1 = await eco.give(user1, cara, value[0]);
    return await  Miku.sendMessage( 
        m.from, 
        { text: `⛩️ User: ${user2.split("@")[0]}} \n *🧧 ${user2.split("@")[0]}} lost all 🪙 in wallet.*\n_Now live with that poverty.🫡_` , mentions: [user2]}, 
        { quoted: m } 
      );
    
}
}