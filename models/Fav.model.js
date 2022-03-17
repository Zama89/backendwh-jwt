const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;

const favoriteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  army: {
    type: Schema.Types.ObjectId,
    ref: 'Army',
    required: true,
  },
});

favoriteSchema.index({ user: 1, army: 1 }, { unique: true });

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;
