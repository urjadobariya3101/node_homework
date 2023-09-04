const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        movie_name : {
            type : String,
            trim : true
        },
        director_name : {
            type : String,
            trim : true
        },
        actor_name : {
            type : String,
            trim : true
        },
        actoress_name : {
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

const Movie = mongoose.model('movies',movieSchema)
module.exports = Movie;