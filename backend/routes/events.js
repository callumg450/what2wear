// Prisma client import (type-safe, generated)
const { PrismaClient } = require('../../database/generated/prisma');
const prisma = new PrismaClient();

const express = require('express');
const router = express.Router();

// GET /events - List all public events
router.get('/', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      where: { isPrivate: false },
      include: {
        createdBy: { select: { id: true, name: true } },
        outfits: true,
      },
      orderBy: { date: 'asc' },
    });
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

// GET /events/:id - Get event details (title, date, outfits, etc.)
router.get('/:id', async (req, res) => {
  try {
    const event = await prisma.event.findUnique({
      where: { id: req.params.id },
      include: {
        createdBy: { select: { id: true, name: true } },
        outfits: {
          include: {
            user: { select: { id: true, name: true } },
            items: true,
          },
        },
      },
    });
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch event' });
  }
});

// POST /events - Create new event
router.post('/', async (req, res) => {
  try {
    const { title, date, location, isPrivate, createdById } = req.body;
    const event = await prisma.event.create({
      data: { title, date: new Date(date), location, isPrivate, createdById },
    });
    res.status(201).json(event);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to create event' });
  }
});

// PATCH /events/:id - Edit event (owner only)
router.patch('/:id', async (req, res) => {
  try {
    const { title, date, location, isPrivate, userId } = req.body;

    // Fetch the event to check ownership
    const event = await prisma.event.findUnique({
      where: { id: req.params.id },
      select: { createdById: true },
    });

    if (!event) {
      return res.status(404).json({ error: 'Event not found' });
    }

    if (event.createdById !== userId) {
      return res.status(403).json({ error: 'Only the event owner can update this event' });
    }

    const updatedEvent = await prisma.event.update({
      where: { id: req.params.id },
      data: {
        title,
        date: date ? new Date(date) : undefined,
        location,
        isPrivate,
      },
    });

    res.json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Failed to update event' });
  }
});

// POST /events/:id/invite - Generate shareable invite link (stub)
router.post('/:id/invite', async (req, res) => {
  // For MVP, just return a dummy invite link
  const inviteLink = `${req.protocol}://${req.get('host')}/event/${req.params.id}?invite=1`;
  res.json({ inviteLink });
});

module.exports = router;
