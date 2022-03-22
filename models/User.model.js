const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  hashedPassword: {
    type: String,
    required: [true, 'password is required'],
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
