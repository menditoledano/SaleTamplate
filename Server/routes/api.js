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
router.get('/', (req, res) => {
  res.send('api works');
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






// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;