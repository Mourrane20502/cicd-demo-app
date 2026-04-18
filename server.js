const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World ! CI/CD Demo - Version 1.1');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', version: '1.0' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

module.exports = app;   