require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const campaignsRouter = require('./routes/campaigns');

const app = express();

app.use(cors({
  origin: 'https://campaign-tracker-eight.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.options('*', cors()); // <-- ALLOWS PREFLIGHT
app.use(express.json());

app.use('/api/campaigns', campaignsRouter);
