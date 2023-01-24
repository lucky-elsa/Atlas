const  Canvacord  = require("canvacord");

module.exports = {
    name: "jail",
    alias: ["jailimage"],
    desc: "To make circle sized image",
    category: "Image Manipulation",
    usage: "circle <reply to image>",
    react: "🍁",
    start: async (Miku, m, { text, prefix, quoted, pushName, mime, body }) => {

        const result = await Canvacord.Canvacord.jail(image, false);


    }}