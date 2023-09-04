const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        product_name : {
            type : String,
            trim : true
        },
        product_price : {
            type : Number,
            trim : true
        },
        product_desc : {
            type : String,
            trim : true
        },
        category : {
            type : mongoose.Types.ObjectId,
            ref : "category"
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Product = mongoose.model('Product',productSchema);
module.exports = Product;