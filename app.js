//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const date = require(__dirname + "/date.js");

// console.log(require);

const newItems = ["eat", "run", "cook"];

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.set('view engine', 'ejs');

// let now = date.getDay();

app.get("/", function(req, res) {

const now = date.getDate();

  res.render("list", {
    listTitle: now,
    newItems: newItems
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.post("/", function(req, res) {
  let newItem = req.body.newItem;
  newItem = newItem;
  newItems.push(newItem);
  res.redirect("/");
});




app.listen(port, function() {
  console.log("OKAY! It's running!");
});

//https://github.com/johndominicvillalino/todolist.git
