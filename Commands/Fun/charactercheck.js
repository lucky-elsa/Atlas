module.exports = {
    name: "charactercheck",
    alias: ["charcheck"],
    desc: "check",
    cool:3,
    react: "😂",
    category: "fun",
    start: async(Miku, m,{pushName}) => {
    const pagal = ['Sigma', 'Generous', 'Grumpy', 'Overconfident', 'Obedient', 'Good', 'Simp', 'Kind', 'Patient', 'Pervert', 'Cool', 'Helpful']
    const aurat = pagal[Math.floor(Math.random() * pagal.length)]
    
    
    Miku.sendMessage(from, { text: `Character Check : ${mentionedUser}\nAnswer : *${aurat}*`}, { quoted: m })  
      
    }
}
