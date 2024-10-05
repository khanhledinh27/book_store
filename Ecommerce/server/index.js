const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const Book = require('./models/Book');

const cors = require('cors');
app.use(cors()); // Enable CORS for all routes

// Middleware
app.use(express.json()); // For parsing application/json

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

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

// Get all books
app.get('/books', async (req, res) => {
    try {
      const books = await Book.find(); // Fetch all books from the database
      res.json(books); // Send the books as a response
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
// Use the books routes
const booksRouter = require('./routes/books');
app.use('/books', booksRouter); // Use the books route under /books endpoint

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
