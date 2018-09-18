const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema and Model

const MarioCharSchema = new Schema({
    name: String,
    weight: Number
});
// everytime a new character is created, we'll create it in this collection based on this schema
const MarioChar = mongoose.model('mariochar', MarioCharSchema);

module.exports = MarioChar;
