const express = require('express');
const router = express.Router();
const emailjs = require('emailjs');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';



var email 	= require("emailjs");
var server 	= email.server.connect({
   user:	"sales@sims4usa.com", 
   password:"chabad613", 
   host:	"smtp.gmail.com", 
   ssl: true
});
 

/* GET api listing. */
router.post('/sendEmail', (req, res) => {
  
  var message	= {
    text:'name: '+req.body.fullName + '\nfrom mail:  '+req.body.emailAddress+'  \nsent you message from the website: \n'	+ req.body.message+
    '\n Phone number: '+ req.body.phone, 
    from: req.body.emailAddress, 
    to:		"sales@sims4usa.com",
    subject:	"email from " + req.body.name,
    
 };
  server.send(message, function(err, message) { console.log(err || message); });
 
});


module.exports = router;