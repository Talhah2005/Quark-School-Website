//server/routes/auth.js
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { auth } = require('../middleware/auth');

router.post('/signup', async (req,res)=>{
  try{
    const { name, email, password } = req.body;
    if(!name || !email || !password) return res.status(400).json({error:'Missing fields'});
    const exists = await User.findOne({email: email.toLowerCase()});
    if(exists) return res.status(409).json({error:'Email already in use'});
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email: email.toLowerCase(), password: hash, role:'student' });
    const token = jwt.sign({ id:user._id, name:user.name, role:user.role, email:user.email }, process.env.JWT_SECRET, { expiresIn:'7d' });
    res.json({ token });
  }catch(e){
    res.status(500).json({error:e.message});
  }
});

router.post('/login', async (req,res)=>{
  try{
    const { email, password } = req.body;
    const user = await User.findOne({email: email.toLowerCase()});
    if(!user) return res.status(401).json({error:'Invalid credentials'});
    const ok = await bcrypt.compare(password, user.password);
    if(!ok) return res.status(401).json({error:'Invalid credentials'});
    const token = jwt.sign({ id:user._id, name:user.name, role:user.role, email:user.email }, process.env.JWT_SECRET, { expiresIn:'7d' });
    res.json({ token });
  }catch(e){
    res.status(500).json({error:e.message});
  }
});

router.get('/me', auth, async (req,res)=>{
  res.json({ id:req.user.id, name:req.user.name, email:req.user.email, role:req.user.role });
});

module.exports = router;