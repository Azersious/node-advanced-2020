const express = require('express');
const app = express();

//Définition d'une route
app.get('/', (req,res,next) => {
  console.log(req.hostname);
  res.send('Hello world')
})


app.get('/users/:name/:id', (req,res) => {
  // res.send('user' + req.params.name)
  res.json(req.params)
})


app.listen(8001,()=> {
  console.log('Application started and listening on port 8001');
})