require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const axios = require('axios');
const morgan = require('morgan');
const { MessagingResponse } = require('twilio').twiml; // TWILIO TEXT
const { VoiceResponse } = require('twilio').twiml; // TWILIO VOICE
const db = require('../database/index');


console.log(process.env.sid);

// const port = 80;
const port = process.env.PORT || 3000;


const app = express();


const client = require('twilio')(
  process.env.sid, //sid
  process.env.token, // TOKEN
);

app.use(express.static(`${__dirname}/../client/dist`));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: 'zara-mila',
  resave: false,
  saveUninitialized: false,
}));


function enforcePhoneNumberPattern(string) {
  let newString = string.match(/[0-9]{0,14}/g);
  if (newString === null) {
    return '';
  }
  // Join parts returned from RegEx match
  newString = newString.join('');
  // Start number with "+"
  newString = `${newString}`;
  // Limit length to 15 characters
  if (newString[0].includes('1')) { newString = `+${newString}`; } else { newString = `+1${newString}`; }
  newString = newString.substring(0, 15);
  return newString;
}

const sms = (data) => {
  console.log(enforcePhoneNumberPattern(data.phone));
  client.messages
    .create({
      body: `NEW HOME VALUATION LEAD!! Name: ${data.first} ${data.last} Phone: ${data.phone} Email: ${data.email} Address: ${data.address}`,
      from: '++12093993200',
      to: '+12094817096',
    })
    .then(message => console.log(message.sid));
};

app.post('/lead', (req, res) => {
  db.save({
    first: req.body.firstName,
    last: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
  });
  console.log('Data sent to database');
  enforcePhoneNumberPattern(req.body.phone);
  sms({
    first: req.body.firstName,
    last: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
  });
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
