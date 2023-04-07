const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        enum: ["Romance", "Science Fiction", "Military History", "Fantasy", "Fiction", "Non-Fiction", "French Poetry"]
    },
});

// Virtual for bookinstance's URL
GenreSchema.virtual("url").get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genre/${this._id}`;
});

// Export model
module.exports = mongoose.model("Genre", GenreSchema);