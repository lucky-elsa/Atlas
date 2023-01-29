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
require("./BotCharacters.js")

require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "918101187835";   // You can Change this number //
}


//global.animeCharacter = '1'  // Choose an anime character from below list //

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
}


if (myCharacter == 0){
        global.botName = "Atlas MD"
        global.botVideo = fs.readFileSync("./Assets/atlas.mp4")
        global.botImage1 = "https://wallpapercave.com/wp/wp5924545.jpg"
        global.botImage2 = "https://wallpapercave.com/wp/wp2417190.jpg"
        global.botImage3 = "https://wallpapercave.com/wp/wp2417243.png"
        global.botImage4 = "https://wallpapercave.com/wp/wp2417250.jpg"
        global.botImage5 = "https://wallpapercave.com/wp/wp2113439.jpg"
        global.botImage6 = "https://wallpapercave.com/wp/wp2113448.jpg"
      }
      else if (myCharacter == 1){
        global.botName = "Power MD"
        global.botVideo = fs.readFileSync("./Assets/power.mp4")
        global.botImage1 = "https://wallpapercave.com/wp/wp11253614.jpg"
        global.botImage2 = "https://wallpapercave.com/wp/wp9413488.jpg"
        global.botImage3 = "https://wallpapercave.com/wp/wp11628561.jpg"
        global.botImage4 = "https://wallpapercave.com/wp/wp11733443.jpg"
        global.botImage5 = "https://wallpapercave.com/wp/wp11733435.jpg"
        global.botImage6 = "https://wallpapercave.com/wp/wp11733458.jpg"
    }
    else if (myCharacter == 2){
      global.botName = "Makima MD"
      global.botVideo = fs.readFileSync("./Assets/makima.mp4")
      global.botImage1 = "https://images5.alphacoders.com/126/1264439.jpg"
      global.botImage2 = "https://images8.alphacoders.com/122/1227171.jpg"
      global.botImage3 = "https://wallpapercave.com/wp/wp9666940.png"
      global.botImage4 = "https://images6.alphacoders.com/123/1238644.jpg"
      global.botImage5 = "https://images2.alphacoders.com/128/1280153.jpg"
      global.botImage6 = "https://images7.alphacoders.com/129/1292566.png"
    }
    else if (myCharacter == 3){
      global.botName = "Denji MD"
      global.botVideo = fs.readFileSync("./Assets/denji.mp4")
      global.botImage1 = "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/11/Chainsaw-Man-Denji-e-Power.webp?resize=1068%2C601&ssl=1"
      global.botImage2 = "https://images.alphacoders.com/128/1284967.jpg"
      global.botImage3 = "https://images.alphacoders.com/128/1286017.jpg"
      global.botImage4 = "https://images6.alphacoders.com/128/1289086.jpg"
      global.botImage5 = "https://images2.alphacoders.com/124/1247132.jpg"
      global.botImage6 = "https://images2.alphacoders.com/128/1286464.jpg"
    }
    else if (myCharacter == 4){
      global.botName = "Zero Two"
      global.botVideo = fs.readFileSync("./Assets/zerotwo.mp4")
      global.botImage1 = "https://images3.alphacoders.com/949/949253.jpg"
      global.botImage2 = "https://images7.alphacoders.com/898/898638.jpg"
      global.botImage3 = "https://images4.alphacoders.com/908/908470.jpg"
      global.botImage4 = "https://images6.alphacoders.com/981/981839.jpg"
      global.botImage5 = "https://images4.alphacoders.com/907/907474.jpg"
      global.botImage6 = "https://images4.alphacoders.com/923/923051.jpg"
    }
    else if (myCharacter == 5){
      global.botName = "Chika MD"
      global.botVideo = fs.readFileSync("./Assets/chika.mp4")
      global.botImage1 = "https://images4.alphacoders.com/100/1002134.png"
      global.botImage2 = "https://images4.alphacoders.com/100/1002714.jpg"
      global.botImage3 = "https://images7.alphacoders.com/107/1071650.jpg"
      global.botImage4 = "https://images3.alphacoders.com/127/1272368.png"
      global.botImage5 = "https://images3.alphacoders.com/122/1225194.png"
      global.botImage6 = "https://wallpapercave.com/wp/wp4624851.jpg"
    }
    else if (myCharacter == 6){
      global.botName = "Miku Nakano MD"
      global.botVideo = fs.readFileSync("./Assets/miku.mp4")
      global.botImage1 = "https://wallpapercave.com/wp/wp10524580.jpg"
      global.botImage2 = "https://wallpapercave.com/wp/wp4828029.jpg"
      global.botImage3 = "https://images4.alphacoders.com/102/1026046.jpg"
      global.botImage4 = "https://wallpapercave.com/uwp/uwp1229563.jpeg"
      global.botImage5 = "https://images7.alphacoders.com/129/1294874.jpg"
      global.botImage6 = "https://wallpapercave.com/wp/wp5758284.jpg"
    }
    else if (myCharacter == 7){
      global.botName = "Marin Kitagawa MD"
      global.botVideo = fs.readFileSync("./Assets/marin.mp4")
      global.botImage1 = "https://images2.alphacoders.com/125/1257915.jpg"
      global.botImage2 = "https://wallpapercave.com/wp/wp10472356.png"
      global.botImage3 = "https://images7.alphacoders.com/121/1210002.png"
      global.botImage4 = "https://images8.alphacoders.com/122/1223407.jpg"
      global.botImage5 = "https://images7.alphacoders.com/121/1211490.jpg"
      global.botImage6 = "https://images3.alphacoders.com/122/1223868.png"
    } 
    else{
      global.botName = "Atlas MD"
      global.botVideo = fs.readFileSync("./Assets/atlas.mp4")
      global.botImage1 = "https://wallpapercave.com/wp/wp5924545.jpg"
      global.botImage2 = "https://wallpapercave.com/wp/wp2417190.jpg"
      global.botImage3 = "https://wallpapercave.com/wp/wp2417243.png"
      global.botImage4 = "https://wallpapercave.com/wp/wp2417250.jpg"
      global.botImage5 = "https://wallpapercave.com/wp/wp2113439.jpg"
      global.botImage6 = "https://wallpapercave.com/wp/wp2113448.jpg"
    }  
  }
  else{
    if (myCharacter == 0){
      global.botName = "Atlas MD"
      global.botVideo = fs.readFileSync("./Assets/atlas.mp4")
      global.botImage1 = "https://wallpapercave.com/wp/wp5924545.jpg"
      global.botImage2 = "https://wallpapercave.com/wp/wp2417190.jpg"
      global.botImage3 = "https://wallpapercave.com/wp/wp2417243.png"
      global.botImage4 = "https://wallpapercave.com/wp/wp2417250.jpg"
      global.botImage5 = "https://wallpapercave.com/wp/wp2113439.jpg"
      global.botImage6 = "https://wallpapercave.com/wp/wp2113448.jpg"
    }
    else if (animeCharacter == 1){
      global.botName = "Power MD"
      global.botVideo = fs.readFileSync("./Assets/power.mp4")
      global.botImage1 = "https://wallpapercave.com/wp/wp11253614.jpg"
      global.botImage2 = "https://wallpapercave.com/wp/wp9413488.jpg"
      global.botImage3 = "https://wallpapercave.com/wp/wp11628561.jpg"
      global.botImage4 = "https://wallpapercave.com/wp/wp11733443.jpg"
      global.botImage5 = "https://wallpapercave.com/wp/wp11733435.jpg"
      global.botImage6 = "https://wallpapercave.com/wp/wp11733458.jpg"
  }
  else if (animeCharacter == 2){
    global.botName = "Makima MD"
    global.botVideo = fs.readFileSync("./Assets/makima.mp4")
    global.botImage1 = "https://images5.alphacoders.com/126/1264439.jpg"
    global.botImage2 = "https://images8.alphacoders.com/122/1227171.jpg"
    global.botImage3 = "https://wallpapercave.com/wp/wp9666940.png"
    global.botImage4 = "https://images6.alphacoders.com/123/1238644.jpg"
    global.botImage5 = "https://images2.alphacoders.com/128/1280153.jpg"
    global.botImage6 = "https://images7.alphacoders.com/129/1292566.png"
  }
  else if (animeCharacter == 3){
    global.botName = "Denji MD"
    global.botVideo = fs.readFileSync("./Assets/denji.mp4")
    global.botImage1 = "https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2022/11/Chainsaw-Man-Denji-e-Power.webp?resize=1068%2C601&ssl=1"
    global.botImage2 = "https://images.alphacoders.com/128/1284967.jpg"
    global.botImage3 = "https://images.alphacoders.com/128/1286017.jpg"
    global.botImage4 = "https://images6.alphacoders.com/128/1289086.jpg"
    global.botImage5 = "https://images2.alphacoders.com/124/1247132.jpg"
    global.botImage6 = "https://images2.alphacoders.com/128/1286464.jpg"
  }
  else if (animeCharacter == 4){
    global.botName = "Zero Two"
    global.botVideo = fs.readFileSync("./Assets/zerotwo.mp4")
    global.botImage1 = "https://images3.alphacoders.com/949/949253.jpg"
    global.botImage2 = "https://images7.alphacoders.com/898/898638.jpg"
    global.botImage3 = "https://images4.alphacoders.com/908/908470.jpg"
    global.botImage4 = "https://images6.alphacoders.com/981/981839.jpg"
    global.botImage5 = "https://images4.alphacoders.com/907/907474.jpg"
    global.botImage6 = "https://images4.alphacoders.com/923/923051.jpg"
  }








  else if (animeCharacter == 5){
    global.botName = "Chika MD"
    global.botVideo = fs.readFileSync("./Assets/chika.mp4")
    global.botImage1 = "https://images4.alphacoders.com/100/1002134.png"
    global.botImage2 = "https://images4.alphacoders.com/100/1002714.jpg"
    global.botImage3 = "https://images7.alphacoders.com/107/1071650.jpg"
    global.botImage4 = "https://images3.alphacoders.com/127/1272368.png"
    global.botImage5 = "https://images3.alphacoders.com/122/1225194.png"
    global.botImage6 = "https://wallpapercave.com/wp/wp4624851.jpg"
  }






  else if (animeCharacter == 6){
    global.botName = "Miku Nakano MD"
    global.botVideo = fs.readFileSync("./Assets/miku.mp4")
    global.botImage1 = "https://wallpapercave.com/wp/wp10524580.jpg"
    global.botImage2 = "https://wallpapercave.com/wp/wp4828029.jpg"
    global.botImage3 = "https://images4.alphacoders.com/102/1026046.jpg"
    global.botImage4 = "https://wallpapercave.com/uwp/uwp1229563.jpeg"
    global.botImage5 = "https://images7.alphacoders.com/129/1294874.jpg"
    global.botImage6 = "https://wallpapercave.com/wp/wp5758284.jpg"
  }






  
  else if (animeCharacter == 7){
    global.botName = "Marin Kitagawa MD"
    global.botVideo = fs.readFileSync("./Assets/marin.mp4")
    global.botImage1 = "https://images2.alphacoders.com/125/1257915.jpg"
    global.botImage2 = "https://wallpapercave.com/wp/wp10472356.png"
    global.botImage3 = "https://images7.alphacoders.com/121/1210002.png"
    global.botImage4 = "https://images8.alphacoders.com/122/1223407.jpg"
    global.botImage5 = "https://images7.alphacoders.com/121/1211490.jpg"
    global.botImage6 = "https://images3.alphacoders.com/122/1223868.png"
  }  
  else{
    global.botName = "Atlas MD"
    global.botVideo = fs.readFileSync("./Assets/atlas.mp4")
    global.botImage1 = "https://wallpapercave.com/wp/wp5924545.jpg"
    global.botImage2 = "https://wallpapercave.com/wp/wp2417190.jpg"
    global.botImage3 = "https://wallpapercave.com/wp/wp2417243.png"
    global.botImage4 = "https://wallpapercave.com/wp/wp2417250.jpg"
    global.botImage5 = "https://wallpapercave.com/wp/wp2113439.jpg"
    global.botImage6 = "https://wallpapercave.com/wp/wp2113448.jpg"
  } 
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
