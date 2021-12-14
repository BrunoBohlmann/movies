const { Schema, model } = require("mongoose");

const MovieSchema = new Schema({
  imdbID: {
    type: INTEGER,
    required: true,
  },
});

module.exports = model("Movie", MovieSchema);
