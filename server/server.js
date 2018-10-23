var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function (req, res, next) {

    // Website to be allowed to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8081');

    // Request methods to be allowed
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

    // Request headers to be allowed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});


app.get('/', function(req, res) {
    // console.log(req.query.fileName);
    fs.readFile(req.query.fileName, function(err, data) {
            res.contentType('json');
            data = JSON.parse(data);
            // console.log(data);
            res.send(data);
        });

});


app.listen(8080);