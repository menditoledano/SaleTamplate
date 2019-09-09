const express = require('express');
const router = express.Router();
const emailjs = require('emailjs');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';


var email = require("emailjs");
var server = email.server.connect({
  user: "770kmosh@gmail.com",
  password: "mendi2161995",
  host: "smtp.gmail.com",
  ssl: true
});


/* GET api listing. */
router.post('/sendEmail', (req, res) => {
  var message = {
    text: 'name: ' + req.body.fullName + '\nfrom mail:  ' + req.body.emailAddress + '  \nsent you message from the website: \n' + req.body.message +
      '\n Phone number: ' + req.body.phone,
    from: req.body.emailAddress,
    to: "sales@sims4usa.com",
    subject: "email from " + req.body.name,

  };
  server.send(message, function (err, message) {
    console.log(err || message);
  });

});

router.post('/sendSaleEmail', (req, res) => {
  console.log(req.body);
  res.status(200).send('OK');
  res.end();

  var message = {
    text:  JSON.stringify(req.body),
    last_name: 'last name' + req.body.last_name,
    from: req.body.payer_email,
    to: "menditoledano@gmail.com",
    subject: "email from " ,

  };

  server.send(message, function (err, message) {
    console.log(err || message);
    res.send('OK');
  });

});


module.exports = router;
