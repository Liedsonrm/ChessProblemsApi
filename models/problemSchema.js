const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const problemSchema = new Schema({
    puzzleId: {
        type: String,
        required: true

    },
    FEN: {
        type: String,
        required: true,
    },
    Moves: [String],
    Rating: {
        type: Number,
        required: true
    },
    Themes: [String],
    GameUrl: String,
})

const Problem = mongoose.model('Problems', problemSchema)