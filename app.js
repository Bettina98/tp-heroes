const express = require('express');
const path = require('path');
const app = express();
const port = 3030;

//console.log(__dirname);

app.get('/', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'index.html')))
app.get('/babbage', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'babbage.html')))
app.get('/berners-lee', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'berners-lee.html')))
app.get('/clarke', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'clarke.html')))
app.get('/hamilton', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'hamilton.html')))
app.get('/hopper', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'hopper.html')))
app.get('/lovelace', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'lovelace.html')))
app.get('/turing', (req,rest) => rest.sendFile(path.join(__dirname, 'views', 'turing.html')))

app.listen(port, () => console.log('Server running in http://localhost:' + port));