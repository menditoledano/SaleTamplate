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
  host: "smtp.gmail.com",
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
  console.log('this is the body !!!!!!!!!!!!!!!!!!!!'+ JSON.stringify(req.body));
  var message = {
    text:  JSON.stringify(req.body),
    last_name: 'last name' + req.body.last_name,
    from: req.body.payer_email,
    to: "menditoledano@gmail.com",
    subject: "email from " ,

  };

  emailServer.send(message, function (err, message) {
    console.log(err || message);
    // res.send('OK');
  });

  // Read the IPN message sent from PayPal and prepend 'cmd=_notify-validate'
  res.status(200).send('OK');
  res.end();

  let postreq = 'cmd=_notify-validate';
  //
  // Object.keys(req.body).forEach((key) => {
  //   postreq = `${postreq}&${key}=${req.body[key]}`;
  // });

  // logger.debug(`IPN Postback: ${postreq}`);
  //
  // const options = {
  //   url: 'https://ipnpb.paypal.com/cgi-bin/webscr',
  //   method: 'POST',
  //   headers: {
  //     Connection: 'close',
  //   },
  //   body: postreq,
  //   strictSSL: true,
  //   rejectUnauthorized: false,
  //   requestCert: true,
  //   agent: false,
  // };
  //
  // request(options, (error, response, body) => {
  //   // logger.debug(`${response.statusCode}: ${body}`);
  //   if (!error && response.statusCode === 200) {
  //     // inspect IPN validation result and act accordingly
  //     if (body.substring(0, 8) === 'VERIFIED') {
  //       // To loop through the &_POST array and print the NV pairs to the screen:
  //       // logger.debug('IPN Data: ');
  //       Object.keys(req.body).forEach((key) => {
  //         // logger.debug(`${key}=${req.body[key]}`);
  //       });
  //     } else if (body.substring(0, 7) === 'INVALID') {
  //       // IPN invalid, log for manual investigation
  //       // logger.error(`IPN Invalid: ${body}`);
  //     }
  //     // Save the IPN and associated data to MongoDB
  //     newIPN.create({
  //       ipnMessageRaw: JSON.stringify(req.body),
  //       ipnMessage: req.body,
  //       ipnPostback: postreq,
  //       status: body,
  //       timestamp: Date.now(),
  //     }, (err) => {
  //       console.log(err);
  //     });
  //   }
  // });
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
