const mongoose = require ('mongoose');

const connectDB = url => {
  return mongoose
    .connect (url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then (data => {
      console.log (`mongod connected with server: ${data.connection.host}`);
    })
    .catch (err => console.log (`error while connect to mongod: ${err}`));
};

module.exports = connectDB;
