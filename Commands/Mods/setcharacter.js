const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mkchar } = require("../../Database/dataschema.js");



module.exports = { 

    name: "setcharacter", 
    alias: ["setchar","setbotcharater","changechar","changecharacter"], 
    desc: "Ban a member", 
    category: "core", 
    usage: "setchar 0/1/2/3/4/5/6/7", 
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

      if (modStatus=="false"&&!isCreator)  return m.reply('Sorry, only my *Devs* and *Mods* can use this command !');
      if (!text) return m.reply(`Please provide a character number to set (0/1/2/3/4/5/6/7).\n\nExample: ${prefix}setchar 0`);

      let charNum = text;

      await mkchar.create({id:'1', seletedCharacter: "0"});

      await mkchar.findOne({id:'1'}).then(async (charInfo) => {
        if (charInfo.seletedCharacter == charNum) {
           
                await mkchar.findOne({id:'1'}).then(async(res) => {
                    console.log(res.seletedCharacter)
                    //console.log(animeCharacter)
                })
            
          return m.reply(`Character number ${charNum} - ${botName} is already set as the default character.`);
        }
        

        if (charNum == '0') {
            await mkchar.findOneAndUpdate({ id: '1'}, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "0";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `Character number ${charNum} - ${botName} is now the default character.\n` }, { quoted: m });
            
        }
        else if (charNum == '1') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "1";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `Character number ${charNum} - ${botName} is now the default character.\n` }, { quoted: m });

        }
        else if (charNum == '2') {
            await await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "2";
            return Miku.sendMessage(m.from, { image: {url:botImage1},caption: `Character number ${charNum} - ${botName} is now the default character.\n` }, { quoted: m });
    
        }
        else if (charNum == '3') {
            await await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "3";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `Character number ${charNum} - ${botName} is now the default character.\n` }, { quoted: m });
    
        }
        else if (charNum == '4') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "4";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `Character number ${charNum} - ${botName} is now the default character.\n` }, { quoted: m });
            
        }
        else if (charNum == '5') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "5";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `Character number ${charNum} - ${botName} is now the default character.\n` }, { quoted: m });
            
        }
        else if (charNum == '7') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "0";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `Character number ${charNum} - ${botName} is now the default character.\n` }, { quoted: m });

        }
        else {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true })
            //global.animeCharacter = "7";
            return await Miku.sendMessage(m.from, { image: {url:botImage1},caption: `Character number ${charNum} - ${botName} is now the default character.\n` }, { quoted: m });

        }

      })    
    
    }
}
