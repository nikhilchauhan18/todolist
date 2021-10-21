const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res) {
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }
  let curdate = new Date();
  let day = curdate.toLocaleDateString("en-US",options);

  res.render("list",{day : day, newitem: items});
});

app.post("/",function(req,res) {
  let item = req.body.item;
  items.push(item);
  res.redirect("/");
})

app.listen(3000,function() {
  console.log("running");
})
