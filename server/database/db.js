const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecom');

const db = mongoose.connection;

db.on('error', (err)=>{
    console.log(err);
    
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;