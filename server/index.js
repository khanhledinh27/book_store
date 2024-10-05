const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path'); // Add this for serving static files

const app = express();
const PORT = process.env.PORT || 5000;

const Book = require('./models/Book');

// Enable CORS for all routes
app.use(cors({
  origin: ['https://natasa-store.onrender.com','http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


// Middleware
app.use(express.json()); 

// MongoDB connection
mongoose.connect('mongodb+srv://khanhledinhwork:KlCmNoeJXxEq3G4q@cluster0.dc6rc.mongodb.net/book_store?retryWrites=true&w=majority')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


// API routes
app.post('/books', async (req, res) => {
  const { tensp, imgURL, gia, mota } = req.body;
  const newBook = new Book({ tensp, imgURL, gia, mota });
  
  try {
    const savedBook = await newBook.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));


// All other GET requests will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
