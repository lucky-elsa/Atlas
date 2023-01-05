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
Hello @${WAuserName.split("@")[0]},
I am *Miku Nakano*, Welcome to ${metadata.subject}.
*Group Description:*
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
Sayonara 👋, @${WAuserName.split("@")[0]},
I hope you will come back soon, but we are not going to miss you though!
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
