// tamper-proof-cms backend server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Test route - evidence health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend running', timestamp: new Date() });
});

// TODO: Evidence upload route
// TODO: Blockchain key generation
// TODO: P2P storage integration

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
