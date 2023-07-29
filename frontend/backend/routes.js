// Flesh out REST API endpoints for core functionality

const express = require('express');
const router = express.Router();

// Add your API endpoints here

router.get('/', (req, res) => {
  res.send('API is working correctly');
});

module.exports = router;