const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('./models');

const authenticate = async (username, password) => {
  const user = await UserModel.findOne({ username });
  if (!user) {
    throw new Error('User not found');
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error('Invalid password');
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  return token;
};

module.exports = authenticate;