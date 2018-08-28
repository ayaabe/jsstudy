var express = require('express');
var path = require('path');
var app = express();

app.use('/', express.static(path.join(__dirname)))
var server = app.listen(3000, function() {
  console.log("app listening at :3000")
})


//app.get("/", function(req, res, next) {
//  res.sendFile(path.join(__dirname, 'index.html'));
//})

