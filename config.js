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

require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "918101187835";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "NONE";
global.sessionId = process.env.SESSION_ID || "ok";
global.prefa = process.env.PREFIX || "-";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || "Miku Nakano";
global.author = process.env.AUTHOR || "by: Fantox";
global.port = process.env.PORT || "8080";
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
