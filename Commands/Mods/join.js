const fs = require("fs");
const { mku } = require("../../lib/dataschema.js");

module.exports = {
    name: "join",
    alias: ["joingc"],
    desc: "ask bot to Join a group",
    category: "Mods",
    usage: "join <link>",
    react: "🍁",
    start: async (
      Miku,
      m,
      { args, text,prefix, isCreator, pushName,groupAdmin }
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

      
      if (!isCreator&&!modStatus=="true"  )
        return Miku.sendMessage(m.from, { text: 'Sorry, only my *Devs* and *Mods* can use this command !' }, { quoted: m });

        if (!text) return Miku.sendMessage(m.from, { text: 'Please provide a valid WhatsApp group link !' }, { quoted: m });
        if (!args[0].includes('whatsapp.com')) return Miku.sendMessage(m.from, { text: 'Please provide a valid WhatsApp group link !' }, { quoted: m });
        let gcJoinCode = args[0].split('https://chat.whatsapp.com/')[1]
        console.log(gcJoinCode)
        const gcInfo = await Miku.groupMetadata(gcJoinCode)
        console.log(gcInfo)
        
         Miku.groupAcceptInvite(gcJoinCode).then( (res) => {
          Miku.sendMessage(m.from, { text: `_Successfully Joined:_ \n\n*${gcInfo.subject}*`}, { quoted: m }).catch((e)=>{
            Miku.sendMessage(m.from, { text: `Failed to join group !`}, { quoted: m })
          }
          )
        }).catch((e)=>{
          Miku.sendMessage(m.from, { text: `Failed to join group !`}, { quoted: m })
        }
        )
    },
  };
  