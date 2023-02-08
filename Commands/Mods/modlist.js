const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku } = require("../../Database/dataschema.js");

module.exports = { 

    name: "modlist", 
    desc: "To view the list of current Mods", 
    alias: ["owner","mods","mod"],
    category: "Mods", 
    usage: "modlist", 
    react: "🔨", 
    start: async (
      Miku, 
      m, 
      { text, prefix, mentionByTag, pushName, isCreator,owner,includes} 
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


      if (!isCreator&&!modStatus=="true") 
        return Miku.sendMessage(m.from, { text: 'Sorry, only my *Devs* and *Mods* can use this command !' }, { quoted: m });

        try { 
        
            var modlist = await mku.find({addedMods: "true"});
            var modlistString = "";
            modlist.forEach(mod => {
              modlistString += `\n@${mod.id.split("@")[0]}\n`
            });
            var mention = modlist.map(mod => mod.id);
            let textM = `             🧣  *${botName} Mods*  🧣\n\n`;
            if(modlistString == ""){
              textM = "*No Mods Added !*";
            } 
            else{
              for (var i = 0; i < modlist.length; i++) {
                textM += `\n🔰 @${modlist[i].id.split("@")[0]}\n`
              }
            }
            if(modlistString != ""){
               textM += `\n\n📛 *Don't Spam them to avoid Blocking !*\n\n🎀 For any help, type *${prefix}support* and ask in group.\n\n*💫 Thanks for using ${botName}. 💫*\n`
            }
            
            return Miku.sendMessage( 
              m.from, 
              { text: textM, mentions: mention }, 
              { quoted: m } 
            );

          } catch (err) { 
            console.log(err);
            return Miku.sendMessage(m.from, { text: `An internal error occurred while fetching the mod list.` }, { quoted: m });
          } 
        }, 
    }
