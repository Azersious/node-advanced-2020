const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send('Hello World Exo')
})

app.use((req,res,next) => {
  console.log(req.path);
  next();
})

app.get('/members/:username', (req,res) => {
  return res.send(`<h1>Hello ${req.params.username}</h1>`)
})


app.listen(8001,()=> {
  console.log('Application started and listening on port 8001');
})