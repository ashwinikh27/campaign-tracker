// backend/models/Campaign.js
const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
  name: { type: String, required: true },
  client: { type: String, required: true },
  startDate: { type: Date, required: true },
  status: { type: String, enum: ['Active', 'Paused', 'Completed'], default: 'Active' }
}, { timestamps: true });

module.exports = mongoose.model('Campaign', CampaignSchema);
