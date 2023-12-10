const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost/myapp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define API route
app.get('/api', (req, res) => {
  res.json({ message : 'Data fetched'})
});

app.get('/Bruh', (req, res) => {
    res.json({ message : 'Mhhm yummy!'})
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}...`));