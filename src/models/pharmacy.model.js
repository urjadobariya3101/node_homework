const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema(
    {
        pharmacy_name : {
            type : String,
            trim : true
        },
        product_name : {
            type : String,
            trim : true
        },
        address : {
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
        versionKey : false,
    }
);

const Pharmacy = mongoose.model('pharmacy',pharmacySchema)
module.exports = Pharmacy;