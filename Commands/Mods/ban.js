
const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku } = require("../../lib/dataschema");



module.exports = { 

    name: "ban", 
    alias: ["ban"], 
    desc: "Ban a member", 
    category: "core", 
    usage: "ban @user", 
    react: "🔨", 
    start: async ( 
      Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, } 
    ) => { 
      if (!text) 
        return Miku.sendMessage( 
          m.from, 
          { text: `Please tag a user to *Ban*!` }, 
          { quoted: m } 
        ); 
      if (!isAdmin) 
        return Miku.sendMessage(m.from, { text: 'You are not authorized to use this command.' }, { quoted: m }); 
    
      const mentionedUser = mentionByTag; 
      let userId = (await mentionedUser[0]) || m.msg.contextInfo.participant; 
      let pushnamer = Miku.getName(userId);
      try { 
         mku.findOne({id:userId}).then(async (user) => {
            if (!user) {
              await mku.create({id:userId, ban: true});
              return Miku.sendMessage( 
                m.from, 
                { text: `${pushnamer} has been *Banned* Successfully! by *${pushName}*` }, 
                { quoted: m } 
              );
            }else{
                if (user.ban == "true") return Miku.sendMessage(m.from, { text: `User is already *Banned*!` }, { quoted: m });
                await mku.findOneAndUpdate({ id: userId }, { ban: true }, { new: true });
                return Miku.sendMessage( 
                  m.from, 
                  { text: `${pushnamer} has been *Banned* Successfully! by *${pushName}*` }, 
                  { quoted: m } 
                );
            }
         }).catch(error => {
           console.log(error)
           return Miku.sendMessage(m.from, { text: `An error occurred while banning the user.` }, { quoted: m });
         });
      } catch (err) { 
        console.log(err);
        return Miku.sendMessage(m.from, { text: `An error occurred while banning the user.` }, { quoted: m });
      } 
    }, 
  };