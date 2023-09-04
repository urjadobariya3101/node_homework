const mongoose = require('mongoose');

const jwellerySchema = new mongoose.Schema(
    {
        jwellery_name : {
            type : String,
            trim : true
        },
        price : {
            type : Number,
            trim : true
        },
        jwellery_type : {
            type : String,
            trim : true
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

const Jwellery = mongoose.model("Jwellery",jwellerySchema);
module.exports = Jwellery;