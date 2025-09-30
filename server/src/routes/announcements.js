const router = require('express').Router();
const Announcement = require('../models/Announcement');
const { auth, requireAdmin } = require('../middleware/auth');

router.get('/', async (req,res)=>{
  const data = await Announcement.find({ isActive: true }).sort({ createdAt: -1 }).limit(20);
  res.json(data);
});

router.post('/', auth, requireAdmin, async (req,res)=>{
  const { text, isActive } = req.body;
  if(!text) return res.status(400).json({error:'text required'});
  const ann = await Announcement.create({ text, isActive: isActive !== false });
  res.json(ann);
});

router.delete('/:id', auth, requireAdmin, async (req,res)=>{
  await Announcement.findByIdAndDelete(req.params.id);
  res.json({ ok:true });
});

module.exports = router;
