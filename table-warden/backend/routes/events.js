const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new event
router.post('/', async (req, res) => {
  const event = new Event({
    name: req.body.name,
    date: req.body.date,
    endDate: req.body.endDate,
    description: req.body.description,
    characterId: req.body.characterId,
    placeId: req.body.placeId,
    color: req.body.color
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a single event
router.get('/:id', getEvent, (req, res) => {
  res.json(res.event);
});

// Update an event
router.put('/:id', getEvent, async (req, res) => {
  if (req.body.name != null) {
    res.event.name = req.body.name;
  }
  if (req.body.date != null) {
    res.event.date = req.body.date;
  }
  if (req.body.endDate != null) {
    res.event.endDate = req.body.endDate;
  }
  if (req.body.description != null) {
    res.event.description = req.body.description;
  }
  if (req.body.characterId != null) {
    res.event.characterId = req.body.characterId;
  }
  if (req.body.placeId != null) {
    res.event.placeId = req.body.placeId;
  }
  if (req.body.color != null) {
    res.event.color = req.body.color;
  }

  try {
    const updatedEvent = await res.event.save();
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an event
router.delete('/:id', getEvent, async (req, res) => {
  try {
    await res.event.remove();
    res.json({ message: 'Deleted Event' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to get event by ID
async function getEvent(req, res, next) {
  let event;
  try {
    event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: 'Cannot find event' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.event = event;
  next();
}

module.exports = router;