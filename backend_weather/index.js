'use strict';

const express = require('express');
const { join } = require('path');

const { port } = require(join(__dirname, 'config.js'));

const app = express();

app.get('/forecast', async (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.sendFile(join(__dirname, 'sampleData.json'));
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
