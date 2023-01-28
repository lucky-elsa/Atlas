/* ---------------------------------------------------------------------------------/
/                                                                                   /
/             d8888 888    888                        888b     d888 8888888b.       /
/            d88888 888    888                        8888b   d8888 888  "Y88b      /
/           d88P888 888    888                        88888b.d88888 888    888      /
/          d88P 888 888888 888  8888b.  .d8888b       888Y88888P888 888    888      /
/         d88P  888 888    888     "88b 88K           888 Y888P 888 888    888      /
/        d88P   888 888    888 .d888888 "Y8888b.      888  Y8P  888 888    888      /
/       d8888888888 Y88b.  888 888  888      X88      888   "   888 888  .d88P      /
/      d88P     888  "Y888 888 "Y888888  88888P'      888       888 8888888P"       /
/                                                                                   / 
/-----------------------------------------------------------------------------------/
/ Author: FantoX                                                                    /
/ Github: https://github.com/FantoX001                                              /
/-----------------------------------------------------------------------------------/
/                                                                                   /
/    This is a config file for the bot, you can change the prefix, owner, etc.      /
/                                                                                   /
/----------------------------------------------------------------------------------*/
const fs = require("fs");
const { mkchar } = require("./Database/dataschema.js");
require("./Processes/characterconfig.js")

require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "918101187835";   // You can Change this number //
}


global.animeCharacter = '1'  // Choose an anime character from below list //

/* ---Added Anime Character list---  /

0 --- Atlas MD
1 --- Power
2 --- Makima
3 --- Denji
4 --- Zero Two
5 --- Chika
6 --- Miku
7 --- Marin Kitagawa

Image Source: https://wall.alphacoders.com/
Image Source: https://wallpapercave.com/

*/



// ---------------------Only modify links if you want to add/ modify character------------------- //
/*
async function getAnimeCharacter(){
 await mkchar.findOne({id:'1'}).then(async(res) => {
  if (res.seletedCharacter != global.animeCharacter ){
    global.animeCharacter = res.seletedCharacter;
    

    /*if (animeChar == 1){
      global.botName = "Power MD"
      global.botVideo = fs.readFileSync("./Assets/power.mp4")
      global.botImage1 = "https://wallpapercave.com/wp/wp11253614.jpg"
      global.botImage2 = "https://wallpapercave.com/wp/wp9413488.jpg"
      global.botImage3 = "https://wallpapercave.com/wp/wp11628561.jpg"
      global.botImage4 = "https://wallpapercave.com/wp/wp11733443.jpg"
      global.botImage5 = "https://wallpapercave.com/wp/wp11733435.jpg"
      global.botImage6 = "https://wallpapercave.com/wp/wp11733458.jpg"
  }
  }
})
}*/



// ---------------------Do Not Modify this part------------------- //

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "NONE";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Atlas MD`;
global.author = process.env.AUTHOR || "by: Team Atlas";
global.port = process.env.PORT || "8080";



// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "Job done...",
  useradmin: "Sorry, only *Group Admins* can use this command *Baka*!",
  botadmin:
    "Sorry, i cant execute this command without being an *Admin* of this group.",
  botowner: "Only my *Owner* can use this command, Baka!",
  grouponly: "This command is only made for *Groups*, Baka!",
  privateonly: "This command is only made for *Private Chat*, Baka!",
  botonly: "Only the *Bot itself* can use this command!",
  waiting: "Chotto Matte...",
  nolink: "Please provide me *link*, Baka!",
  error: "An error occurd!",
  banned: "You are *Banned* fron using commands!",
  bangc: "This Group is *Banned* from using Commands!",
  nonsfw: "Dont be a pervert Baka! This is not a NSFW enabled group!",
};
