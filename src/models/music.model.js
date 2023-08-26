const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const musicSchema = new mongoose.Schema(
  {
    song_name: {
      type: String,
      trim: true,
    },
    singer_name: {
      type: String,
      trim: true,
    },
    lyrics: {
        type : String,
        trim : true
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Music = mongoose.model("music", musicSchema);
module.exports = Music;
