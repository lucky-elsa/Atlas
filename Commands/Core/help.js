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
   `
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
╭・🍂・ ᴀɴɪᴍᴇ, ᴘɪɴᴛᴇʀᴇsᴛ
├・🍂・ɢᴏᴏɢʟᴇ, ᴡᴇᴀᴛʜᴇʀ
╰・🍂・ɢɪᴛʜᴜʙ, ɢɪᴍᴀɢᴇ
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
├・🍂・ ᴅᴇᴘᴏsɪᴛ, ᴡɪᴛʜᴅʀᴀᴡ, ɢɪᴠᴇ
╰・🍂・ʀᴏʙ,  sʟᴏᴛ, ᴡᴀʟʟᴇᴛ, ʀᴇsᴇᴛʙᴀɴᴋ╰・🍂
〢
〢━━━━│⌬・𝐄𝐧𝐝・│━━━━〢

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
