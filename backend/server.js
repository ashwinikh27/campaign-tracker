require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const campaignsRouter = require('./routes/campaigns');

const app = express();

app.use(cors({
  origin: 'https://campaign-tracker-eight.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

app.use('/api/campaigns', campaignsRouter);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB Connected');
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB Error:', err));
