require('dotenv').config();
const mongoose = require('mongoose');

// dev
mongoose.connect(process.env.mongo_url, {
  reconnectTries: 100,
  reconnectInterval: 500,
  autoReconnect: true,
  useNewUrlParser: true,
  dbName: 'homevaluations',
})
  .catch(err => console.log('Mongo connection error', err));


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB has connected');
});

// schemas
const leadSchema = ({
  first: String,
  last: String,
  phone: Number,
  email: String,
  address: String,
  timeStamp: { type: Date, default: Date.now },
});


// models
const Lead = mongoose.model('Lead', leadSchema);


// save functions
function save(e) {
  console.log(e, 'SAVE FUNC');
  const obj = new Lead({
    first: e.first,
    last: e.last,
    phone: e.phone,
    email: e.email,
    address: e.address,
  });
  obj.save();
  console.log('Data saved to MongoDB Database');
}

const funcs = {
  save, Lead,
};
module.exports = funcs;
