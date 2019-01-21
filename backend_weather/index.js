'use strict';

const express = require('express');
const { join } = require('path');

const { port } = require(join(__dirname, 'config.js'));
const data = require(join(__dirname, 'sampleData.js'));

const app = express();

app.get('/forecast', (req, res) => {
  res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send(data);
});

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
