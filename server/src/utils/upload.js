// server/src/utils/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads dir if missing
const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

// Read max size from env, default 10 MB
const maxMB = parseInt(process.env.MAX_UPLOAD_MB || '10', 10);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname || '');
    cb(null, `${unique}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (/^image\//.test(file.mimetype)) cb(null, true);
  else cb(new Error('Only image files are allowed'));
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: maxMB * 1024 * 1024 }, // e.g., 10 MB
});

module.exports = upload;
