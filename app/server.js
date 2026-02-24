const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the app/images directory
const imagesPath = path.join(__dirname, 'images');
app.use('/images', express.static(imagesPath));

// Serve favicon files from the public directory
const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

// Serve assets from app directory
const assetsPath = path.join(__dirname, 'assets');
app.use('/assets', express.static(assetsPath));

// Route for the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log('\n🚀 Portfolio Website is running!');
    console.log(`\n📍 Local: http://localhost:${PORT}`);
    console.log(`\n✨ Press Ctrl+C to stop the server\n`);
});

