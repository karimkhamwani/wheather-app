var express = require('express')
var bodyParser = require("body-parser");
var app = express();

app.use(express.static('public'));
app.use(bodyParser.json({limit:"50mb"})); // <--- Here
app.use(bodyParser.urlencoded({extended: true}));

app.listen(4000,function(){
  console.log('Express server is up on 4000')
})

app.get('/user',function(req,res){
  console.log("From user")
  res.send(true)
})

app.post('/check',function(req,res){
  //console.log(req.body.firstName)
  console.log(req.body.name+req.body.lname)
  console.log("Hey")
  var s = { name : req.body.name, lname:req.body.lname}
  res.send(s)
})

module.exports = app
