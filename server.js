// Get dependencies
const compression = require('compression');
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./Server/routes/api');

const email = require('emailjs');
const emailServer = email.server.connect({
  user: 'support@sims4usa.com',
  password: 'sims4usa770',
  host: 'smtp.gmail.com',
  port: '465',
  ssl: true
});

const app = express();

// Parsers for POST data
app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.post('/', (req, res) => {
  console.log(
    'this is the body !!!!!!!!!!!!!!!!!!!!' + JSON.stringify(req.body)
  );
  var payload = req.body;
  var message = {
    text:
      'You got a new Order!' +
      '\n\n' +
      'Buyer name: ' +
      payload.address_name +
      '\nItem is: ' +
      payload.item_name +
      '\nDate of Arrive on USA: ' +
      payload.custom +
      '\nAdrress: ' +
      payload.address_street +
      '\n' +
      payload.address_city +
      '\n' +
      payload.address_state +
      '\n' +
      payload.residence_country +
      '\n' +
      'Buyer email address: ' +
      payload.payer_email,
    from: req.body.payer_email,
    to: 'support@sims4usa.com',
    subject: 'email from '
  };
  try {
    emailServer.send(message, function(err, message) {
      console.log(err || message);
    });
  } catch (e) {
    console.log(e);
  }
  res.status(200).send('OK');
  res.end();
});

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/api', api);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

const port = process.env.PORT || '7700';
app.set('port', port);
const server = http.createServer(app);
app.listen(port, () => console.log(`API running on localhost:${port}`));
