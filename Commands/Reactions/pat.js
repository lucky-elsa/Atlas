const axios = require("axios");
const fs = require("fs");
const {unlink } = require ('fs').promises
const child_process = require('child_process')
const sleep =  (ms) =>{ return new Promise((resolve) =>{ setTimeout (resolve, ms)})} 


module.exports = {
  name: "pat",
  alias: ["animepat"],
  desc: "To pat any user",
  category: "Reaction",
  usage: `pat @user`,
  react: "🍁",
  start: async (Miku, m, { text, prefix, args}) => {

    var pat = await axios.get('https://api.waifu.pics/sfw/pat');
    try{
        let user1 = m.sender;
        let user2 =``;
        try{
            user2 =m.quoted ? m.quoted.sender : m.mentionedJid[0] ? m.mentionedJid[0] : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net';       
            mikuMentioned[user1,user2]
        }catch {
            user2 == "none"
            mikuMentioned=[user1,m.sender]
        }
        if(user2 == "none"){
            musers =`@${m.sender.split("@")[0]} patted themselves !`
       
       }
       else {
        const rcpp =`@${user2.split("@"[0])}`
         musers= `@${m.sender.split("@")[0]} patted  @${user2.split("@")[0]} `
        
        }

    const response = await axios.get(pat.data.url,  { responseType: 'arraybuffer' })
    const buffer = Buffer.from(response.data, "utf-8")
    var fetchedgif = await GIFBufferToVideoBuffer(buffer)

       await Miku.sendMessage(m.from,{video: fetchedgif, gifPlayback:true,mentions:mikuMentioned,caption:musers},{quoted:m})
    } 
    catch (error) {
        console.log(error);
    }    
      
}}

async function GIFBufferToVideoBuffer(image){
        
    const filename = `${Math.random().toString(36)}`
            await fs.writeFileSync(`./Processes/${filename}.gif`, image)
                     child_process.exec(
                                `ffmpeg -i ./Processes/${filename}.gif -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ./Processes/${filename}.mp4`
                                        ) 
  await sleep(4000)
  
    var buffer5  =  await  fs.readFileSync(`./Processes/${filename}.mp4`)
    Promise.all([unlink(`./Processes/${filename}.mp4`), unlink(`./Processes/${filename}.gif`)])
    return buffer5
                   }