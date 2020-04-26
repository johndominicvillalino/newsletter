//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

let newItems = ["eat", "run", "cook"];

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));
app.set('view engine', 'ejs');



app.get("/", function(req, res) {

  let today = new Date();
  let currentDay = today.getDay();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let now = today.toLocaleDateString("en-ES", options);

  res.render("list", {
    now: now,
    newItems: newItems

  });

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
