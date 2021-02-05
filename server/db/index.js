const mongoose = require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  mongoose.connect('mongodb://localhost:27017/react_native_demo_db', options);

  const db = mongoose.connection;
  
  module.exports = db;