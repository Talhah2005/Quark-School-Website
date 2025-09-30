const mongoose = require('mongoose');
const gallerySchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  title: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('GalleryItem', gallerySchema);
