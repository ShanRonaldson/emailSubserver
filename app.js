// ECHO is on.
//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
// app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {

    // console.log(req);
    console.log(req.body);

//   var firstName = req.body.fName;
//   var surname = req.body.sName;
//   var email = req.body.email;

//   console.log(firstName, surname, email);

//   res.status(200).send();
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
