module.exports = async (Miku, anu) => {
    try {
      let metadata = await Miku.groupMetadata(anu.id);
      let participants = m.participants;
  
      for (let num of participants) {
        try {
          ppuser = await Miku.profilePictureUrl(num, "image");
        } catch {
          ppuser = "https://wallpapercave.com/wp/wp10753770.jpg";
        }
  
        if (anu.action == "add") {
          let WAuserName = num;
          mikutext = `
  ʜᴇʟʟᴏ @${WAuserName.split("@")[0]},
  ɪ ᴀᴍ *ᴍɪᴋᴜ ɴᴀᴋᴀɴᴏ*, ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ${metadata.subject}.
  *ɢʀᴏᴜᴘ ᴅᴇѕᴄʀɪᴘᴛɪᴏɴ:*
  ${metadata.desc}
  `;
  
          let buttonMessage = {
            image: await getBuffer(ppgroup),
            mentions: [num],
            caption: mikutext,
            footer: `Miku Nakano`,
            headerType: 4,
          };
        } else if (anu.action == "remove") {
          let WAuserName = num;
          mikutext = `
  @${WAuserName.split("@")[0]}ʟᴇғᴛ ᴛʜᴇ ɢʀᴏᴜᴘ,
  @${WAuserName.split("@")[0]}
  ᴛʜɪɴᴋѕ ᴡᴇ ᴀʀᴇ ɢᴏɪɴɢ ᴛᴏ ᴍɪѕѕ💔😂 ʜɪᴍ/ʜᴇʀ.
  `;
  
          let buttonMessage = {
            image: await getBuffer(ppuser),
            mentions: [num],
            caption: mikutext,
            footer: `Miku Nakano`,
            headerType: 4,
          };
        }
        Miku.sendMessage(anu.id, buttonMessage)
      }
                  
  
    } catch (err) {
      console.log(err);
    }
  };