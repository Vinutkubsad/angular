const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');


//set up express app
const app = express();

//connect to a mongodb
mongoose.connect('mongodb://localhost/ninjago');
//deprecated
mongoose.Promise = global.Promise;

app.use(express.static('public'));

app.use(bodyparser.json());

//initialize routes
app.use('/app',require('./routes/api'));

//error handling midlewere
app.use(function(err,req,res,next){
  console.log(err);
  res.status(422).send({error: err.messsage});
});


//listen to request
app.listen(process.env.port||2000, function(){
  console.log('now it is listning for request');
});