  const express = require("express");
  const app = express();

  app.get("about", function(req, res){
    res.send( "<h3><cent re><mark>Hello This Sunil Kumar .🎃.who are you ??</mark></centre></h3>")
  });

  app.get("/contact", function(req, res){
    res.send( "<h3><cent re><mark>Hello This Sunil Kumar .🎃.who are you ??</mark></centre></h3>")
  });

  app.get("/exit", function(req, res){
    res.send( "<h3><cent re><mark>Hello This Sunil Kumar .🎃.who are you ??</mark></centre></h3>")
  });

  app.get("/", function(req, res){
    res.send( "<h3><cent re><mark>Hello This Sunil Kumar .🎃.who are you ??</mark></centre></h3>")
  });

  app.listen(1703, function(){
    console.log("Server started on port 1703");
  });