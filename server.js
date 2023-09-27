const express = require("express");
const initDB = require("./config/db");

const usersRouters = require("./app/routes/user");
const productsRouters = require("./app/routes/products");
const ordersRouters = require("./app/routes/orders");
const authRouters = require("./app/routes/auth");

const app = express();
const port = 8080;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(usersRouters);
app.use(productsRouters);
app.use(ordersRouters);
app.use(authRouters);

initDB();

app.listen(port, () => {
  console.log("La aplicación está en línea!");
});

