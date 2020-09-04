const express = require("express");
const app = express();
const PORT = 8001;
const router = require('./app.router')
const engine = require('express-hbs');

app.engine('hbs', engine.express4({
  partialsDir : `${process.cwd()}/views/partials`,
  defaultLayout : `${process.cwd()}/views/layouts/default.hbs`
}))

app.set('view engine', 'hbs');
app.use(router)

// • Launch
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("App started :: " + PORT);
});