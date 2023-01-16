const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku } = require("../../lib/dataschema");

module.exports = {
    name: "unban", 
    alias: ["unban"], 
    desc: "Unban a member", 
    category: "core", 
    usage: "unban @user", 
    react: "🔨", 
    start: async (
      Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, } 
    ) => { 
      if (!text) 
        return Miku.sendMessage( 
          m.from, 
          { text: `Please tag a user to *Unban*!` }, 
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
              return Miku.sendMessage( 
                m.from, 
                { text: `${pushnamer} is not banned.` }, 
                { quoted: m } 
              );
            }else{
                if (user.ban == "false") return Miku.sendMessage(m.from, { text: `${pushnamer} is not banned!` }, { quoted: m });
                await mku.findOneAndUpdate({ id: userId }, { ban: false }, { new: true });
                return Miku.sendMessage( 
                  m.from, 
                  { text: `${pushnamer} has been *Unbanned* Successfully! by *${pushName}*` }, 
                  { quoted: m } 
                );
            }
         }).catch(error => {
           console.log(error)
           return Miku.sendMessage(m.from, { text: `An error occurred while Unbanning the user.` }, { quoted: m });
         });
      } catch (err) { 
        console.log(err);
        return Miku.sendMessage(m.from, { text: `An error occurred while Unbanning the user.` }, { quoted: m });
      } 
    }, 
  };