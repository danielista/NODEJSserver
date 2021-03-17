var express = require('express');
var app = express();

app.get('/', function(req,res){
  res.send('HELLO THERE');
})

app.get('/home', function(req,res){
  res.status(200).send('ha -ha- h-ome');
})

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s",host,port)

});
