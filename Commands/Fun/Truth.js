const axios = require('axios')

module.exports = {
    name: 'truth',
    alias: ['t'],
    desc: 'truth',
    cool: 3,
    react: '🙄',
    category: 'Fun',
    start: async (Miku, m, { text, prefix }) => {
        const list = await axios.get('https://pastebin.com/raw/KbJ918SV')
        const dey = list.data[Math.floor(Math.random() * list.data.length)]
        const buttons = [
            { buttonId: `${prefix}dare`, buttonText: { displayText: 'Dare 🤔' }, type: 1 },
            { buttonId: `${prefix}truth`, buttonText: { displayText: 'Truth 😶' }, type: 2 }
        ]
        const buttonMessage = {
            image: { url: botImage3 },
            caption: dey,
            footer: `*${botName}*`,
            buttons: buttons,
            headerType: 4
        }
        return await Miku.sendMessage(m.from, buttonMessage, { quoted: m })
    }
}
