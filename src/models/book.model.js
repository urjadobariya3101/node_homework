const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs')

const bookSchema = new mongoose.Schema(
    {
        book_name : {
            type : String,
            trim : true
        },
        book_price : {
            type : String,
            trim : true
        },
        author_name : {
            type : String,
            trim : true
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        trimstamp : true,
        versionKey : false
    }
);

const Book = mongoose.model('Book',bookSchema);
module.exports = Book;