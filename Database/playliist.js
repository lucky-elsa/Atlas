const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    }
});

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    owner: {
        type: String,
        required: true
    },
    date: { type: Date },
    songs: [songSchema]
});

const playlist = mongoose.model("Playlist", playlistSchema);
module.exports = { playlist };