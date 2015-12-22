var express = require("express");
var morgan = require("morgan");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;
var publicDir = path.join(__dirname, 'public');
var proxy = require('express-http-proxy');

app.use(morgan("dev"));
app.use(express.static(publicDir));

app.use('/proxy', proxy('localhost:3005', {
    forwardPath: function(req, res) {
        return require('url').parse(req.url).path;
    }
}));

app.get("*", function(req, res) {
    res.sendFile(path.join(publicDir, 'main.html'));
});

app.listen(port, function() {
    console.log("Express server listening on port " + port);
});
