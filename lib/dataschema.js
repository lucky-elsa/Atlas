const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://fantox001:zjmbvgwr52@cluster0.qh05pl9.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected to database!')); //.catch(e){console.log(`unable to connect mongo url`)}


const UserSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
ban: { type: String, default: "false" },
name: { type: String },
})






const mku =mongoose.model("Mku", UserSchema)

module.exports = { mku }
