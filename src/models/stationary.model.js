const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const stationarySchema = new mongoose.Schema(
    {
        item : {
            type : String,
            trim : true,
        },
        price : {
            type : Number,
            trim : true,
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false,
    }
);

const Stationary = mongoose.model("Stationary",stationarySchema);
module.exports = Stationary;