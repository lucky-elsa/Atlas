module.exports = {
  name: "isonline",
  alias: ["listonlune", "here", "online"],
  desc: "Check who is online isde group.",
  react: "🍁",
  category: "Core",
  start: async (Miku, m, { args,botNumber,store,metadata,groupAdmin}) => {
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.from;
    let online = [...Object.keys(store.presences[id]), botNumber];
    let liston = 1;
    Miku.sendText(
      m.from,
      "     『 *Online Members* 』\n\n" +
        online.map((v) => `${liston++} . @` + v.replace(/@.+/, "")).join`\n`,
        { quoted: m },
      { mentions: online }
    );
  },
};
