const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create Schema and Model

const BookSchema = new Schema({
    title: String,
    pages: Number
});

const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema] /*bookschema is nested within*/
});

// everytime a new character is created, we'll create it in this collection based on this schema
const Author = mongoose.model('author', AuthorSchema);

module.exports = Author;