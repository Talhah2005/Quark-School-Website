require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const multer = require('multer'); // <-- add this

const app = express();
app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",       // Local React app
  "https://myapp.com",           // Production frontend
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow request
    } else {
      callback(new Error("CORS not allowed for this origin"));
    }
  },
  credentials: true
}));

// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const MONGO = process.env.MONGODB_URI || 'mongodb://localhost:27017/quark_school';
mongoose.connect(MONGO).then(()=>console.log('MongoDB connected')).catch(err=>console.error(err));

// Models
const User = require('./src/models/User');
const seedAdmin = require('./src/utils/seedAdmin');
seedAdmin(); // create admin if env vars present

// Routes
app.use('/api/auth', require('./src/routes/auth'));
app.use('/api/announcements', require('./src/routes/announcements'));
app.use('/api/banners', require('./src/routes/banners'));
app.use('/api/gallery', require('./src/routes/gallery'));
app.use('/api/instagram', require('./src/routes/instagram'));

app.get('/', (req,res)=> res.json({ ok:true, app:'Quark School API' }));
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Specific Multer errors (file too large, etc.)
    let msg = err.message;
    if (err.code === 'LIMIT_FILE_SIZE') {
      const maxMB = process.env.MAX_UPLOAD_MB || 10;
      msg = `File too large. Max ${maxMB} MB allowed.`;
    }
    return res.status(400).json({ error: msg, code: err.code });
  }
  if (err) {
    return res.status(500).json({ error: err.message || 'Server error' });
  }
  next();
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on http://localhost:${PORT}`));
