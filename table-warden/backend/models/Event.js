const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  endDate: Date,
  description: String,
  characterId: mongoose.Schema.Types.ObjectId,
  placeId: mongoose.Schema.Types.ObjectId,
  color: String
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;