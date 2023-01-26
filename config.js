/* ---------------------------------------------------------------------------------/
/     __  __   _   _                _   _           _                               /
/    |  \/  | (_) | |              | \ | |         | |                              /
/    | \  / |  _  | | __  _   _    |  \| |   __ _  | | __   __ _   _ __     ___     /
/    | |\/| | | | | |/ / | | | |   | . ` |  / _` | | |/ /  / _` | | '_ \   / _ \    /
/    | |  | | | | |   <  | |_| |   | |\  | | (_| | |   <  | (_| | | | | | | (_) |   /
/    |_|  |_| |_| |_|\_\  \__,_|   |_| \_|  \__,_| |_|\_\  \__,_| |_| |_|  \___/    /
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
3 --- Vermeil
4 --- Denji
5 --- Zero Two

*/


// ---------------------Only modify links if you want to add/ modify character------------------- //


if (global.animeCharacter == 1){
    global.botName = "Power MD"
    global.botVideo = fs.readFileSync("./assets/power.mp4")
    global.botImage1 = "https://wallpapercave.com/wp/wp11253614.jpg"
    global.botImage2 = "https://wallpapercave.com/wp/wp9413488.jpg"
    global.botImage3 = "https://wallpapercave.com/wp/wp11628561.jpg"
    global.botImage4 = "https://wallpapercave.com/wp/wp11733443.jpg"
    global.botImage5 = "https://wallpapercave.com/wp/wp11733435.jpg"
    global.botImage6 = "https://wallpapercave.com/wp/wp11733458.jpg"
}


// ---------------------Do Not Modify this part------------------- //

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "NONE";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `${botName}`;
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
