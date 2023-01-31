const mongoose = require("mongoose");
require("../../config.js");
require("../../Core.js");
const { mk } = require("../../Database/dataschema.js");



module.exports = {
    name: "chatbot",
    alias: ["autochat","autoreply","chatbotgc","chatbotgroup"],
    desc: "Enable or disable the autoreply feature in a group",
    category: "Group",
    usage: "chatbot [on/off]",
    react: "🎀",
    start: async (
      Miku,
      m,
      { args, isBotAdmin, isAdmin, isCreator, reply,prefix,pushName }
    ) => {
      
        if (!isAdmin)
        return Miku.sendMessage(
          m.from,
          {
            text: `*${pushName}* must be *Admin* to enable Chatbot !`,
          },
          { quoted: m }
        );
  
      let checkdata = await mk.findOne({ id: m.from });
      var groupe = await Miku.groupMetadata(m.from);
      var members = groupe["participants"];
      var mems = [];
      members.map(async (adm) => {
        mems.push(adm.id.replace("c.us", "s.whatsapp.net"));
      });
  
      if (args[0] === "on") {
        if (!checkdata) {
          await new mk({ id: m.from, chatBot: "true" }).save();
          Miku.sendMessage(
            m.from,
            {
              text: `*Group Chatbot Activated! *`,
              contextInfo: { mentionedJid: mems },
            },
            { quoted: m }
          );
          return Miku.sendMessage(
            m.from,
            { text: `*Group Chatbot Activated !*` },
            { quoted: m }
          );
        } else {
          if (checkdata.chatBot == "true")
            return Miku.sendMessage(
                m.from,
                { text: `*Already activated.*` },
                { quoted: m }
              );
          await mk.updateOne({ id: m.from }, { chatBot: "true" });
          return Miku.sendMessage(
            m.from,
            { text: `*Group Chatbot Activated !*` },
            { quoted: m }
          );
        }
      } else if (args[0] === "off") {
        if (!checkdata) {
          await new mk({ id: m.from, chatBot: "false" }).save();
          return Miku.sendMessage(
            m.from,
            { text: `*Group Chatbot De-Activated!*` },
            { quoted: m }
          );
        } else {
          if (checkdata.chatBot == "false") return Miku.sendMessage(
            m.from,
            { text: `*Already deactivated.*` },
            { quoted: m }
          );
          await mk.updateOne({ id: m.from }, { chatBot: "false" });
          return Miku.sendMessage(
            m.from,
            { text: `*Group Chatbot De-Activated !*` },
            { quoted: m }
          );
        }
      } else {
        let buttonsntilink = [
          {
            buttonId: `${prefix}chatbot on`,
            buttonText: { displayText: "On" },
            type: 1,
          },
          {
            buttonId: `${prefix}chatbot off`,
            buttonText: { displayText: "Off" },
            type: 1,
          },
        ];
        let bmffg = {
          image: {url : botImage4} ,
          caption: `\nPlease click the button below\n*On / Off*\n`,
          footer: `*${botName}*`,
          buttons: buttonsntilink,
          headerType: 4,
        };
        await Miku.sendMessage(m.from, bmffg, { quoted: m });
    }
  },
};