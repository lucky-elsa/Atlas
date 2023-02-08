const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true },
  antilink: { type: String, default: "false" },
  nsfw: { type: String, default: "false" },
  bangroup: { type: String, default: "false" },
  chatBot: { type: String, default: "false" },
  botSwitch: { type: String, default: "true" },
  switchNSFW: { type: String, default: "false" },
  switchWelcome: { type: String, default: "false" }
  })

const UserSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  ban: { type: String, default: "false" },
  name: { type: String },
  gcname: { type: String },
  reason: {type: String, default: "no reason" },
  addedMods: { type: String, default: "false" }
});

const CharacterSchema = new mongoose.Schema({
  id: {type: String , unique: false, required: true , default: "1" },
  seletedCharacter: { type: String, default: "0" },
  PMchatBot: { type: String, default: "false" },
  privateMode: { type: String, default: "false" }
});


const mku = mongoose.model("Mku", UserSchema);
const mk =mongoose.model("Mk", GroupSchema)
const mkchar = mongoose.model("Mkchar", CharacterSchema);

module.exports = { mk, mku, mkchar };
