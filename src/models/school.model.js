const mongoose = require('mongoose');

const schoolSchema = new mongoose.Schema(
    {
        school_name : {
            type : String,
            trim : true
        },
        student_name : {
            type : String,
            trim : true
        },
        std : {
            type : Number,
            trim : true
        },
        area : {
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
        versionKey : false,
    }
);

const School = mongoose.model('school',schoolSchema)
module.exports = School;