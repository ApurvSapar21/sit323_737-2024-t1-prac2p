const express = require('express');
const app = express();
const path = require('path');

// Define the path to serve static files (like HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the root URL
app.get('/', (req, res) => {
  // Send the index.html file as the response
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
