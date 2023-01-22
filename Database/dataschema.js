const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true },
  antilink: { type: String, default: "false" },
  nsfw: { type: String, default: "false" },
  bangroup: { type: String, default: "false" }
  })

const UserSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  ban: { type: String, default: "false" },
  name: { type: String },
  reason: {type: String, default: "no reason" },
  addedMods: { type: String, default: "false" },
});

const mku = mongoose.model("Mku", UserSchema);
const mk =mongoose.model("Mk", GroupSchema)

module.exports = { mk, mku };
