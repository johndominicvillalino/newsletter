//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

app.get("/",function(req,res){

  res.send("Hello World");

});


app.listen(port,function(){
  console.log("Good!");
});
