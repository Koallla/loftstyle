const mongoose = require('mongoose');
const { Schema } = mongoose;

const imageSchema = new Schema({
  preview: { type: String, required: true },
  original: { type: String, required: true },
  description: String,
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
