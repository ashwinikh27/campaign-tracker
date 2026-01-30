require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const campaignsRouter = require('./routes/campaigns');

const app = express();

// ✅ CORS (allow local + Vercel)
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://campaign-tracker-eight.vercel.app'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// ✅ Routes
app.use('/api/campaigns', campaignsRouter);

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// ✅ START SERVER (THIS WAS MISSING)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
