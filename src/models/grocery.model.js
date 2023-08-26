const mongoose = require('mongoose');

const grocerySchema = new mongoose.Schema(
    {
        grocery_shop_name : {
            type : String,
            trim : true
        },
        item : {
            type : String,
            trim : true
        },
        price : {
            type : Number,
            trim : true
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        trimstamp : true,
        versionKey : false,
    }
);

const Grocery = mongoose.model('groceries',grocerySchema)
module.exports = Grocery;