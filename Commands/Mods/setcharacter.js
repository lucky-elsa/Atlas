const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mku, mkchar } = require("../../Database/dataschema.js");



module.exports = { 

    name: "setcharacter", 
    alias: ["setchar","setbotcharater","changechar","changecharacter","botchar","botcharacter"], 
    desc: "Ban a member", 
    category: "core", 
    usage: "setchar 0/1/2/3/4/5/6/7", 
    react: "🎀", 
    start: async ( 
      Miku, 
      m, 
      { text, prefix, isBotAdmin, isAdmin, mentionByTag, pushName, isCreator,modStatus} 
    ) => { 

      if (modStatus=="false"&&!isCreator)  return m.reply('Sorry, only my *Devs* and *Mods* can use this command !');
      if (!text) return m.reply(`Please provide a character number to set (0/1/2/3/4/5/6/7).\n\nExample: ${prefix}setchar 0`);

      let charNum = text;

      await mkchar.create({id:'1', seletedCharacter: "0"});

      let botNames = ['Atlas MD', 'Power MD', 'Makima MD', 'Denji MD', 'Zero Two', 'Chika MD' , 'Miku MD', 'Marin Kitagawa']
      let botLogos =[
        'https://wallpapercave.com/wp/wp5924545.jpg',
        'https://wallpapercave.com/wp/wp11253614.jpg',
        'https://images5.alphacoders.com/126/1264439.jpg',
        'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/11/Chainsaw-Man-Denji-e-Power.webp?resize=1068%2C601&ssl=1',
        'https://images3.alphacoders.com/949/949253.jpg',
        'https://images4.alphacoders.com/100/1002134.png',
        'https://wallpapercave.com/wp/wp10524580.jpg',
        'https://images2.alphacoders.com/125/1257915.jpg'
      ]

      await mkchar.findOne({id:'1'}).then(async (charInfo) => {

        
        if (charInfo.seletedCharacter == charNum) {
           
                await mkchar.findOne({id:'1'}).then(async(res) => {
                    console.log(res.seletedCharacter)
                    //console.log(animeCharacter)
                })
            
          return m.reply(`Character number ${charNum} - ${botName} is already set as the default character.`);
        }
        else if (charNum == '0') {
            await mkchar.findOneAndUpdate({ id: '1'}, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '1') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '2') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '3') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '4') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '5') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '6') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}
        else if (charNum == '7') {
            await mkchar.findOneAndUpdate({ id: '1' }, { $set: { seletedCharacter: charNum } }, { new: true }).then(async(res) => {
                await Miku.sendMessage(m.from, { image: {url:botLogos[charNum]},caption: `Character number ${charNum} - ${botNames[charNum]} is now the default character.\n` }, { quoted: m })
            }).catch(error => {
                return m.reply(`An error occurred while updating the character number.`)
            })}

        else {
            return m.reply(`Character number ${charNum} is not added.\n\ntype *${prefix}charlist* to see the list of added characters.`);
        }
    })


        /*if (charNum == '0') {
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
        */

    }
}       