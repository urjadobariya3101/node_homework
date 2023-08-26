const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema(
    {
        hotel_name : {
            type : String,
            trim : true
        },
        manager_name : {
            type : String,
            trim : true
        },
        staff : {
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

const Hotel = mongoose.model('hotel',hotelSchema)
module.exports = Hotel;