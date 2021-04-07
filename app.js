var express = require('express');
const app = express();
var path = require('path');
var https = require('https');  
var fs = require('fs');

var options = {  
  key: fs.readFileSync('./localhost.key'),
  cert: fs.readFileSync('./localhost.crt')
};

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/data',(req,res) => {
    console.log(req.query);
    res.send("recieved");
})
  
https.createServer(options,app).listen(8080); //HTTPs - secure

// app.listen(3000);  

//http - in-secure
