const express = require('express');
const initDB = require('./config/db')

const userRouters = require('./app/routes/user');
const itemsRouters = require('./app/routes/items');

const app = express();
const port = 8080;

app.use(userRouters);
app.use(itemsRouters);

app.listen(port, () => {
    console.log('La aplicación está en línea!')
})

initDB();