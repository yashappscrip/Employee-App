var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/EmployeeDB";
const mongoose = require('mongoose');
mongoose.connect(url,{useNewUrlParser:true},(err)=>{
  if(!err){
    console.log("Connection established!");
  }
  else{
    console.log("Error in connection :"+err);
  }
});
require("./employee");
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });