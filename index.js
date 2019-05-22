const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true})); //this wil tell node to use a package


app.get('/',function(req,res){
  //server sends this file back to the browser
  res.sendFile(__dirname + '/index.html'); //current file path where ever
                            //the server is running
});

//to get things back from the response object
//you need an npm packaged called body parser
//this helps with getting this information
//because node does not have a built in function to
//handle this so use npm. and also body parser
//is used to get the address data which our form
//will post to the server this is visible in
//the link address of the root page

app.post('/',function(req,res){

  //.means stuff on the request object ie(req.)

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send('thanks for posting. the result of calculating is ' + result);
});

//have to create another get to get a website from the server
app.get('/bmiCalculator',function(req,res){
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', function(req,res){
   var weight = parseFloat(req.body.weight);
   var height = parseFloat(req.body.height);

   var bmi = weight / (height * height);

   res.send('The result of the calculation is ' + bmi);
});

app.listen(3000,function(){
  console.log('server is running on port 3000');
});
