var db = require("./models/db");
// var request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const handleBar = require('express-handlebars');
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',handleBar({extname:'hbs',defaultLayout:'index',layoutsDir:__dirname+'/views/layouts/'}));
app.set('view engine','hbs');
const employeeController = require('./controllers/employeeControllers');
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine','ejs');
// app.use(express.static('public'));
// app.get('/', function (req, res) {
//  res.render('index');
// });
app.use('/employee',employeeController); 
app.listen(3000, function () {
  console.log('Employee app listening!');
});