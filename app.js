const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Import and use routes
const memberRoutes = require('./routes/members');
const staffRoutes = require('./routes/staff');
app.use('/api/members', memberRoutes);
app.use('/api/staff', staffRoutes);

// Basic route for testing
app.get('/', (req, res) => res.send('Welcome to the Digital Library!'));

module.exports = app;


