var express = require('express');
var app = express(); // Web framework to handle routing requests
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 80;
 app.use(bodyParser());
 app.use('/',express.static(__dirname));
 app.listen(PORT,function(){
     console.log('Bob says hey server listening on port '+PORT+"!");

 });
