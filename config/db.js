const mongoose = require("mongoose");

const DB_URI = "mongodb://127.0.0.1/burguer_queen";

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
