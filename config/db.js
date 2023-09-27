const mongoose = require("mongoose");
require('dotenv').config();

const DB_URI = process.env.connectionString;

module.exports = () => {
  const connect = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect(
        DB_URI, 
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
         (err) => {
      if (err) {
        console.log("DB: ERROR", err);
      } else {
        console.log("Conexión exitosa");
      }
    });
  };

  connect();
};
