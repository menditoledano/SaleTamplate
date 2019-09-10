// Get dependencies
const compression = require("compression");
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

// Get our API routes
const api = require("./Server/routes/api");

const email = require("emailjs");
const emailServer = email.server.connect({
  user: "770kmosh@gmail.com",
  password: "mendi2161995",
  host: 'smtp.gmail.com',
  port: '465',
  ssl: true
});


const app = express();

// Parsers for POST data
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.post('/', (req, res) => {
  // Before anything else, log the IPN
  // logger.info(`New IPN Message: ${JSON.stringify(req.body)}`);
  console.log('this is the body !!!!!!!!!!!!!!!!!!!!' + JSON.stringify(req.body));
  var payload = req.body;
  var message = {
    text: 'Buyer name: ' + payload.address_name +
      '\nDate of Arrive on USA: ' + payload.custom +
      '\nAdrress: ' + payload.address_street + '\n' +
      payload.address_city + '\n' +
      payload.address_state + '\n' +
      payload.residence_country,
    from: req.body.payer_email,
    to: "menditoledano@gmail.com",
    subject: "email from ",
  };
  try {
    emailServer.send(message, function (err, message) {
      console.log(err || message);
      // res.send('OK');
    });
  } catch (e) {
    console.log(e);
  }
  // Read the IPN message sent from PayPal and prepend 'cmd=_notify-validate'
  res.status(200).send('OK');
  res.end();


});


app.use(express.static(path.join(__dirname, "dist")));
app.use("/api", api);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "src/index.html"))
});

const port = process.env.PORT || "7700";
app.set("port", port);
const server = http.createServer(app);
app.listen(port, () => console.log(`API running on localhost:${port}`));
