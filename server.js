// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { Types } = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

// GET /users/:id
app.get('/users/:id', async (req, res) => {
  const { id } = req.params;

  // Validate ObjectId
  if (!Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid user ID format' });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });

    if (!user) {
      return res.status(404).json({ error: 'User not found or under age' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
