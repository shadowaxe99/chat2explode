// Integrate database models and CRUD operations

const mongoose = require('mongoose');

// Add your database models and CRUD operations here

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;