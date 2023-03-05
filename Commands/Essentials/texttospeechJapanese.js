const ttt = require("google-tts-api");

module.exports = {
  name: "sayjapanese",
  alias: ["speakjapanese", "sayjapanese", "sayinjapnese", "sayja"],
  desc: "Say somethong using bot in Japanese accent.",
  usage: "sayjapanese <text>",
  react: "🍁",
  category: "Essentials",
  start: async (Miku, m, { pushName, prefix, args, text, mime }) => {
    if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ""}`;
    } else if (args[0]) {
      message = args.join(" ");
    } else {
      message = `Please provide me a text to say ${pushName} senpai !`;
    }

    const texttospeechurl = ttt.getAudioUrl(message, {
      lang: "ja",
      slow: false,
      host: "https://translate.google.com",
    });

    Miku.sendMessage(
      m.from,
      { audio: { url: texttospeechurl }, mimetype: "audio/mpeg" },
      { quoted: m }
    ).catch((e) => {
      m.reply(`An error Occurd !`);
    });
  },
};
