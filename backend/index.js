// Express server setup for What2Wear backend
const express = require('express');
const cors = require('cors');
const eventsRouter = require('./routes/events');

const app = express();
app.use(cors());
app.use(express.json());

// Mount events API
app.use('/events', eventsRouter);

// Basic health check
app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend API running on port ${PORT}`);
});
