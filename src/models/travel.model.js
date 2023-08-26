const mongoose = require("mongoose");
// const bcrypt = require('bcryptjs')

const travelSchema = new mongoose.Schema(
    {
        traveler_name : {
            type : String,
            trim : true
        },
        destination : {
            type : String,
            trim : true
        },
        pick_up_point : {
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

const Travel = mongoose.model('Travel',travelSchema);
module.exports = Travel;