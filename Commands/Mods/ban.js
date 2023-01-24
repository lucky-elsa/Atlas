const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku } = require("../../Database/dataschema.js");



module.exports = { 

    name: "ban", 
    alias: ["banuser"], 
    desc: "Ban a member", 
    category: "core", 
    usage: "ban @user", 
    react: "🎀", 
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

      
      
      if (modStatus=="false"&&!isCreator)  return Miku.sendMessage(m.from, { text: 'Sorry, only my *Devs* and *Mods* can use this command !' }, { quoted: m });
        
      //var TaggedUser = mentionByTag[0];

      if (!text && !m.quoted) {
        return Miku.sendMessage( 
          m.from, 
          { text: `Please tag a user to *Ban*!` }, 
          { quoted: m } 
        )}
        if (!text.slice(text.indexOf(" ") + 1)) {
          return Miku.sendMessage(
            m.from,
            { text: `Please provides the reason for ban.` },
            { quoted: m }
          );
        }
        else if(m.quoted){
          var mentionedUser = m.quoted.sender;
        }
        else{
          var mentionedUser = mentionByTag[0];
        }
      //var mentionedUser = mentionByTag; 
      let textArr = text.split(" ");
let banreason = textArr[1] ? textArr.slice(1).join(" ") : "";
if (!banreason) return Miku.sendMessage(m.from, { text: `Please provide the reason for ban.` }, { quoted: m });
      var ownerlist = global.owner;

      let userId = (await mentionedUser) || m.msg.contextInfo.participant; 
      try { 
         mku.findOne({id:userId}).then(async (user) => {
            if (!user) {
              if (user.addedMods == "true" || ownerlist.includes(`${mentionedUser.split("@")[0]}`)) return Miku.sendMessage(m.from, { text: `@${mentionedUser.split("@")[0]} is a *Mod* and can't be banned !` , mentions: [mentionedUser]  }, { quoted: m });
              await mku.create({id:userId, ban: true, reason: banreason});
              return Miku.sendMessage( 
                m.from, 
                { text: `@${mentionedUser.split("@")[0]} has been *Banned* Successfully by *${pushName}*\n\n *Reason*: ${banreason}`, mentions: [mentionedUser] }, 
                { quoted: m } 
              );
            }else{
              if (user.addedMods == "true" || ownerlist.includes(`${mentionedUser.split("@")[0]}`)) return Miku.sendMessage(m.from, { text: `@${mentionedUser.split("@")[0]} is a *Mod* and can't be banned !` , mentions: [mentionedUser]  }, { quoted: m });
                if (user.ban == "true") return Miku.sendMessage(m.from, { text: `@${mentionedUser.split("@")[0]} is already *Banned* !` , mentions: [mentionedUser]  }, { quoted: m });
                await mku.findOneAndUpdate({ id: userId }, { $set: { ban: true, reason: banreason } }, { new: true });
                return Miku.sendMessage( 
                  m.from, 
                  { text: `@${mentionedUser.split("@")[0]} has been *Banned* Successfully by *${pushName}*\n\n *Reason*: ${banreason}` , mentions: [mentionedUser]}, 
                  { quoted: m } 
                );
            }
         }).catch(error => {
           console.log(error)
           return Miku.sendMessage(m.from, { text: `An internal error occurred while banning the user.` }, { quoted: m });
         });
      } catch (err) { 
        console.log(err);
        return Miku.sendMessage(m.from, { text: `An internal error occurred while banning the user.` }, { quoted: m });
      } 
    }, 
  };
