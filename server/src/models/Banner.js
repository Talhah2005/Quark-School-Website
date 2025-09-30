const mongoose = require('mongoose');
const bannerSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  caption: { type: String }
}, { timestamps: true });
module.exports = mongoose.model('Banner', bannerSchema);
