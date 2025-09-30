// server/src/routes/banners.js
const router = require('express').Router();
const Banner = require('../models/Banner');
const { auth, requireAdmin } = require('../middleware/auth');
const upload = require('../utils/upload');

router.get('/', async (req,res)=>{
  const data = await Banner.find().sort({createdAt:-1});
  // If you previously stored relative URLs, convert on the fly:
  const base = `${req.protocol}://${req.get('host')}`;
  const mapped = data.map(b => ({ 
    ...b.toObject(), 
    imageUrl: b.imageUrl.startsWith('http') ? b.imageUrl : `${base}${b.imageUrl}`
  }));
  res.json(mapped);
});

router.post('/', auth, requireAdmin, upload.single('image'), async (req,res)=>{
  if(!req.file) return res.status(400).json({error:'image required'});
  const caption = req.body.caption || '';
  const relative = `/uploads/${req.file.filename}`;
  const base = `${req.protocol}://${req.get('host')}`;
  const imageUrl = `${base}${relative}`;
  const created = await Banner.create({ imageUrl, caption });
  res.json(created);
});

router.delete('/:id', auth, requireAdmin, async (req,res)=>{
  await Banner.findByIdAndDelete(req.params.id);
  res.json({ ok:true });
});

module.exports = router;
