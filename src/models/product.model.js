const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        product_name : {
            type : String,
            trim : true
        },
        product_price : {
            type : String,
            trim : true
        },
        product_desc : {
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
        versionKey : true
    }
);

const Product = mongoose.model('Product',productSchema);
module.exports = Product;