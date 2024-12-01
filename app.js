// Import Express
const express = require('express');
const app = express();

// Define a port
const PORT = 3000;

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World! Welcome to my Node.js application.');
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://192.168.0.102:${PORT}`);
});

