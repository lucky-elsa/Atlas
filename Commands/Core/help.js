const fs = require("fs");

module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "🍁",
  category: "Core",
  start: async (Miku, m, {prefix,pushName}) => {
   var text = `Konichiwa *${pushName}* Senpai,
   I am *Miku Nakano*, a bot developed by *FantoX* and his awesome team.

   🔰 My prefix is:  ${prefix}

   Here's the list of my Commands.\n
   `;
text +=`
╔════⧫🧧𝑪𝒐𝒓𝒆🧧
║
║ ${prefix}help
║ ${prefix}support
║
╚════════════╝
╔════⧫🎀𝑶𝒘𝒏𝒆𝒓🎀
║
║ ${prefix}ban
║ ${prefix}unban
║ ${prefix}addmod
║ ${prefix}delmod
║
╚════════════╝
╔════⧫👥𝑮𝒓𝒐𝒖𝒑👥
║
║ ${prefix}add
║ ${prefix}admins
║ ${prefix}setnamegc
║ ${prefix}setgcdesc
║ ${prefix}gclink
║ ${prefix}ping
║ ${prefix}tagall
║ ${prefix}delete
║ ${prefix}promote
║ ${prefix}demote
║ ${prefix}remove
║ ${prefix}revoke
║ ${prefix}setppgc
║
╚════════════╝
╔════⧫⛓️𝑨𝒏𝒕𝒊 𝑳𝒊𝒏𝒌⛓️
║

║
╚════════════╝
╔════⧫🔎𝑺𝒆𝒂𝒓𝒄𝒉🔍
║
║ ${prefix}anime <anime name>
║ ${prefix}gif <query>
║ ${prefix}gimage <query>
║ ${prefix}github <username>
║ ${prefix}google <query>
║ ${prefix}lyrics <song name>
║ ${prefix}pinterest <query>
║ ${prefix}ringtone <song name>
║ ${prefix}stickersearch <query>
║ ${prefix}weather <location>
║
╚════════════╝
╔════⧫⚙️𝑪𝒐𝒏𝒗𝒆𝒓𝒕⚙️
║
║ ${prefix}quote
║ ${prefix}toimg
║ ${prefix}tovideo
║ ${prefix}togif
║ ${prefix}steal
║ ${prefix}sticker
║ ${prefix}stickercrop
║
╚════════════╝
╔════⧫🔉𝑨𝒖𝒅𝒊𝒐🔉
║
║ ${prefix}bass
║ ${prefix}tempo
║ ${prefix}blown
║ ${prefix}deep
║ ${prefix}earrape
║ ${prefix}fast
║ ${prefix}fat
║ ${prefix}nightcore
║ ${prefix}reverse
║ ${prefix}robot
║ ${prefix}slow
║ ${prefix}squirrel
║
╚════════════╝
╔════⧫💥𝑹𝒆𝒂𝒄𝒕𝒊𝒐𝒏𝒔💥
║
║ ${prefix}bonk
║ ${prefix}cry
║ ${prefix}bully
║ ${prefix}cuddle
║ ${prefix}hug
║ ${prefix}kiss
║ ${prefix}lick
║ ${prefix}pat
║ ${prefix}smug
║ ${prefix}yeet
║ ${prefix}blush
║ ${prefix}smile
║ ${prefix}wave
║ ${prefix}highfive
║ ${prefix}handhold
║ ${prefix}nom
║ ${prefix}glomp
║ ${prefix}bite
║ ${prefix}slap
║ ${prefix}kill
║ ${prefix}happy
║ ${prefix}wink
║ ${prefix}poke
║ ${prefix}dance
║ ${prefix}cringe
║
╚════════════╝
╔════⧫📥𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅𝒆𝒓📥
║

║
╚════════════╝
╔════⧫☄️𝑾𝒆𝒆𝒃☄️
║
║ ${prefix}animequote
║ ${prefix}cosplay
║ ${prefix}cosplayvideo
║ ${prefix}narutoamv
║
╚════════════╝

╔════⧫📣𝐺𝑎𝑚𝑒📣
║

║
╚════════════╝
╔════⧫🦋𝑭𝒖𝒏🦋
║ ${prefix}texteditormenu
║ ${prefix}aiimage
║ ${prefix}reaction
║ ${prefix}truth
║ ${prefix}dare
║ ${prefix}handsomecheck
║ ${prefix}beautifulcheck
║ ${prefix}awesomecheck
║ ${prefix}greatcheck
║ ${prefix}ganducheck
║ ${prefix}maturecheck
║ ${prefix}gaycheck
║ ${prefix}cutecheck
║ ${prefix}lesbiancheck
║ ${prefix}hornycheck
║ ${prefix}prettycheck
║ ${prefix}lovelycheck
║ ${prefix}uglycheck
║ ${prefix}charactercheck
║ ${prefix}setbotpp
║ ${prefix}stickermeme
║ ${prefix}staminacheck
║ ${prefix}straightcheck
║
╚════════════╝

`

let buttons = [
    {
      buttonId: `${prefix}repo`,
      buttonText: { displayText: "Source Code" },
      type: 1,
    },
  ];
  let buttonMessage = {
    video: fs.readFileSync('./Assets/miku.mp4'), gifPlayback: true,
    caption: text,
    footer: `*Miku Nakano*`,
    buttons: buttons,
    headerType: 4,
  };

  await Miku.sendMessage(m.from, buttonMessage, { quoted: m });

  },
};
