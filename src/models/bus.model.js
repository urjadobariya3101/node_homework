const mongoose = require('mongoose');

const busSchema = new mongoose.Schema(
    {
        bus_name : {
            type : String,
            trim : true
        },
        bus_number : {
            type : Number,
            trim : true,
        },
        capacity : {
            type : Number,
            trim : true

        },
        seat_price : {
            type : Number,
            trim : true
        },
        is_active : {
            type : Boolean,
            trim : true
        }
    },
    {
        trimstamp : true,
        versionKey : false
    }
)

const Bus = mongoose.model('Bus',busSchema);
module.exports = Bus;