var express = require('express')();
var app = express();
var patj = require('path');

app.use(express.statis('public'));
app.get('*', (req,res)=> {
    res.sendFile(__dirname + '/public/index.html');
});
app.listen(4000);

console.log("hello world");