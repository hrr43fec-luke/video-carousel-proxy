const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();


app.use(express.static('public'));

/* function apiHandler(path, req, res) {
  if (path in apis) {
    return fetch(`http://${req.hostname}:${apis[path]}${req.url}`)
    .then((results) => results.json())
    .then((results) => res.send(results));
  };
}

const apis = {
  chats: 3002,
  carousel: 3003,
  channels: 3004,
}
app.get('/api/chats/:videoId', (req, res) => {
  return apiHandler('chats', req, res);
});

app.get('/videos/userId', (req, res) => {
  return apiHandler('carousel', req, res);
});

app.listen(3005, () => {
  console.log('Listening on port 3005');
  }); */