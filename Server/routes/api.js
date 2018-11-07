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
    text:	"i hope this works", 
    from:	" sales@sims4usa.com", 
    to:		"menditoledano@gmail.com, sales@sims4usa.com",
    cc:		"",
    subject:	"testing emailjs",
    
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