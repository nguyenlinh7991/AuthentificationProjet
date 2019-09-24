// //Install express server
// const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/cours-imie'));

// app.get('/*', function(req, res) {

//     res.sendFile(path.join(__dirname + '/dist/cours-imie/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require("./routes");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist/cours-imie')));

app.use("/api", routes);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/cours-imie/index.html'));
});

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
});

module.exports = app;