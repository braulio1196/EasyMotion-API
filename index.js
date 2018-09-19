//app.js
const express = require('express');
const router = require('./routes')
const app = express();

app.use(router);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
