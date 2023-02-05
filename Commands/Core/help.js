module.exports = {
  name: "help",
  alias: ["menu", "h", "helpm", "helpmenu"],
  desc: "Gives all bot commands list",
  react: "✨",
  category: "Core",
  start: async (Miku, m, {prefix,pushName}) => {
   var text = `Konichiwa *${pushName}* Senpai,

I am *${botName}*, a bot developed by *Team Atlas*.



Here's the list of my Commands.\n
   
〢
〢━━━│⌬・𝐂𝐎𝐑𝐄・│━━━〢
〢
├・🎐・ ʜᴇʟᴘ, ᴄᴏᴜᴘʟᴇᴘᴘᴘ, 
╰・🎐・ sᴛᴀʟᴋ, sᴜᴘᴘᴏʀᴛ
〢
〢━━━│⌬・𝐆𝐑𝐎𝐔𝐏・⌬│━━━〢
〢
╭・🍁・ᴀᴅᴍɪɴ, ᴅᴇᴍᴏᴛᴇ
├・🍁・ᴛᴀɢᴀʟʟ, ʜɪᴅᴇᴛᴀɢ
├・🍁・ᴅᴇʟᴇᴛᴇ, ʀᴇᴍᴏᴠᴇ
╰・🍁・ɢᴄʟɪɴᴋ,ʀʀᴠᴏᴋᴇ
〢
〢━━│⌬・𝐌𝐨𝐝𝐬・⌬│━━〢
〢
╭・🍂・ᴀᴅᴅᴍᴏᴅ, ᴅᴇʟᴇᴛᴇᴍᴏᴅ
├・🍂・ ʙʟᴏᴄᴋ, ᴜɴʙʟᴏᴄᴋ,
├・🍂・ ʙᴀɴ, ᴜɴʙᴀɴ, ʙᴀɴʟɪsᴛ
╰・🍂・ ᴊᴏɪɴ, ᴍᴏᴅʟɪsᴛ
〢
〢━━━━│⌬・𝐌𝐞𝐝𝐢𝐚・│━━━━〢
〢
╭・🍂・ ᴘʟᴀʏ, ᴘʟᴀʏʟɪsᴛ
├・🍂・ʏᴛᴀᴜᴅɪᴏ, ʏᴛᴠɪᴅᴇᴏ
╰・🍂・ɪɢᴅʟ, 
〢
〢━━━│⌬・𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍・│━━━〢
〢
╭・✨・ʙɪᴛᴇ, ᴋɪᴄᴋ, ᴋɪʟʟ
├・✨・ʜᴜɢ, ᴋɪss, ғᴜᴄᴋ
╰・✨・sʟᴀᴘ, ᴘᴀᴛ, 
〢
〢━━━━│⌬・sᴇᴀʀᴄʜ・⌬│━━━━〢
〢
╭・🍂・ ᴀɴɪᴍᴇ, ᴘɪɴᴛᴇʀᴇsᴛ, lyrics
├・🍂・ɢᴏᴏɢʟᴇ, ᴡᴇᴀᴛʜᴇʀ, ringtone
╰・🍂・ɢɪᴛʜᴜʙ, ɢɪᴍᴀɢᴇ, anime
〢
〢━━━│⌬・𝐄𝐬𝐬𝐞𝐧𝐭𝐢𝐚𝐥𝐬・│━━━〢
〢
╭・🍂・ ɪɢᴜsᴇʀ, ᴛʀᴜᴇᴄᴀʟʟᴇʀ
├・🍂・ sᴄʀᴇᴇɴsʜᴏᴛ, ᴛᴇxᴛᴛᴏsᴘᴇᴇᴄʜ
╰・🍂・
〢
〢━━━│⌬・𝐄𝐜𝐨𝐧𝐨𝐦𝐲・│━━━〢
〢
╭・🍂・ ᴅᴀɪʟʏ, ʙᴀɴᴋ, ᴄᴀᴘᴀᴄɪᴛʏ
├・🍂・ ᴅᴇᴘᴏsɪᴛ, ᴡɪᴛʜᴅʀᴀᴡ,
╰・🍂・ ʀᴏʙ,  sʟᴏᴛ, ᴡᴀʟʟᴇᴛ,
〢
〢━━━│⌬・Fun・│━━━〢
〢
╭・🍂・ awesomecheck, charactercheck
├・🍂・ truth, dare, dice
╰・🍂・ fact, coinflip
〢
〢━━━│⌬・Image Mnaipulation・│━━━〢
〢
╭・🍂・ blur, circle
├・🍂・ circleimage, jail
╰・🍂・ removebg, trigger
〢
〢━━━│⌬・Logo Maker・│━━━〢
〢
╭・🍂・ cloud, circuit, 3dstone
├・🍂・ 3dneon, 3dspace, bear
╰・🍂・ removebg, trigger, blood
╰・🍂・ bokeh, blackpink, candy
╰・🍂・ carbon, choco, deepsea
╰・🍂・ demon, gltich, glitch1
╰・🍂・ lion, joker, magma
╰・🍂・ graffiti, matrix, christmas
╰・🍂・ dropwater, hollographic
〢
〢━━━│⌬・Rpg・│━━━〢
〢
╭・🍂・ buy, inventory
├・🍂・ mine, reg-inv
╰・🍂・ shop
〢
〢━━━│⌬・Utilities・│━━━〢
〢
╭・🍂・ emojimix, quote, tourl
├・🍂・ sticker, stickersteal, tomp3
╰・🍂・ stickercrop, toimg, togif 
〢
〢━━━│⌬・Weeb・│━━━〢
〢
╭・🍂・ animequotes, cosplay
├・🍂・ cosplayvideo, foxgirl
╰・🍂・ maid 
〢
〢━━━━│⌬・𝐄𝐧𝐝・│━━━━〢\n`

let buttons = [
    {
      buttonId: `${prefix}repo`,
      buttonText: { displayText: "Source Code" },
      type: 1,
    },
  ];
  let buttonMessage = {
    video: botVideo, gifPlayback: true,
    caption: text,
    footer: `*${botName}*`,
    buttons: buttons,
    headerType: 4,
  };

  await Miku.sendMessage(m.from, buttonMessage, { quoted: m });

  },
};
