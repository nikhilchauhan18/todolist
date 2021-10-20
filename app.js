const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

app.get("/",function(req,res) {
  var curdate = new Date();
  var day = "";

  if(curdate == 0 || curdate == 6){
    day = "weekend";
  }else{
    day = "weekday";
  }

  res.render("list",{day : day});

});

app.listen(3000,function() {
  console.log("running");
})
