// server/src/routes/gallery.js
const router = require('express').Router();
const GalleryItem = require('../models/GalleryItem');
const { auth, requireAdmin } = require('../middleware/auth');
const upload = require('../utils/upload');

router.get('/', async (req,res)=>{
  const data = await GalleryItem.find().sort({createdAt:-1});
  const base = `${req.protocol}://${req.get('host')}`;
  const mapped = data.map(g => ({
    ...g.toObject(),
    imageUrl: g.imageUrl.startsWith('http') ? g.imageUrl : `${base}${g.imageUrl}`
  }));
  res.json(mapped);
});

router.post('/', auth, requireAdmin, upload.single('image'), async (req,res)=>{
  if(!req.file) return res.status(400).json({error:'image required'});
  const title = req.body.title || '';
  const relative = `/uploads/${req.file.filename}`;
  const base = `${req.protocol}://${req.get('host')}`;
  const imageUrl = `${base}${relative}`;
  const created = await GalleryItem.create({ imageUrl, title });
  res.json(created);
});

router.delete('/:id', auth, requireAdmin, async (req,res)=>{
  await GalleryItem.findByIdAndDelete(req.params.id);
  res.json({ ok:true });
});

module.exports = router;
