const fs = require("fs");
const { mkchar } = require("../Database/dataschema.js");

require('../config.js');

let myCharacter = global.animeCharacter;

async function getAnimeCharacter(){
  await mkchar.findOne({id:'1'}).then(async(res) => {
    if ( myCharacter != res.seletedCharacter ){
      myCharacter = res.seletedCharacter;

      if (myCharacter == 1){
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
      global.botImage1 = "https://images3.alphacoders.com/128/1281468.png"
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
      if (myCharacter == 1){
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
      global.botImage1 = "https://images3.alphacoders.com/128/1281468.png"
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

  })
}
getAnimeCharacter();




