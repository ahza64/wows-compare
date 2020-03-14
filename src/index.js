const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.static(path.join(__dirname, '../public')));

var url = 'https://api.worldofwarships.com/wows/encyclopedia/ships/?application_id=' + process.env.WOWS_APP_ID;
var jsonn = {};

fetch(url)
  .then(res => res.json())
  .then(json => {
    jsonn = json;
  })
  .catch(err => {
      console.log(err);
  });

app.listen(port, () => {
  console.log("Server is running on port 3000");
});