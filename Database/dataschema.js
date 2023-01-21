const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  ban: { type: String, default: "false" },
  name: { type: String },
  addedMods: { type: String, default: "false" },
});

const mku = mongoose.model("Mku", UserSchema);

module.exports = { mku };
