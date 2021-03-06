var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname+'/public'));
app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
});
app.listen(port, function() {
  console.log('listens on',port);
});
