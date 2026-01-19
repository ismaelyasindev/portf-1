const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the public directory
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log('\n🚀 Portfolio Website is running!');
    console.log(`\n📍 Local: http://localhost:${PORT}`);
    console.log(`\n✨ Press Ctrl+C to stop the server\n`);
});

