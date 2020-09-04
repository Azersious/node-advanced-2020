const express = require("express");
const app = express();
const PORT = 8001;
const router = require('./app.router');
// • Route
app.use((req,res,next) => {
  console.log(req.url);
  next();
});

app.use(express.static(`${process.cwd()}/public`));
app.use(router);

app.use((req,res,next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
})

app.use((error,req,res,next) => {
  res.status(error.status || 500).sendFile(`${process.cwd()}/views/error.html`)
  })
  // res.status(error.status || 500).send({
  //   error:{
  //     status: error.status || 500,
  //     message: error.message || 'Internal Server Error'
  //   }
  // })
// })

// • Launch
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("App started :: " + PORT);
});