const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = async function seedAdmin(){
  const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME } = process.env;
  if(!ADMIN_EMAIL || !ADMIN_PASSWORD) return;
  const existing = await User.findOne({email: ADMIN_EMAIL.toLowerCase()});
  if(existing) return;
  const hash = await bcrypt.hash(ADMIN_PASSWORD, 10);
  await User.create({ name: ADMIN_NAME || 'Admin', email: ADMIN_EMAIL.toLowerCase(), password: hash, role: 'admin' });
  console.log('Seeded initial admin:', ADMIN_EMAIL);
};
