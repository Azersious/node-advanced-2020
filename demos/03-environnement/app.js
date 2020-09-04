const express = require('express');
const app = express();
require('dotenv').config({path : './production.env'})
console.log(`DB HOST is ${process.env.DB_HOST}`);
app.get('/', (req,res) => {
  res.send('Hello')
})

app.listen(process.env.PORT)