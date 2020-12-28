var express = require('express');
var app = express();
var path = require('path')
const kisiController = require('./controller');



app.use("/public", express.static('./public/'));


app.get('/difficultygraph', function(req, res) {
    res.sendFile(path.join(__dirname + '/DifficultyGraph.html'));
});

app.get('/regression', function(req, res) {
    res.sendFile(path.join(__dirname + '/Regression.html'));
});

app.get('/resolveimbalances', function(req, res) {
    res.sendFile(path.join(__dirname + '/ResolveImbalances.html'));
});



app.listen(5000);