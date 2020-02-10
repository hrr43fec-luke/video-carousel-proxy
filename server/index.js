const express = require('express');
const path = require('path');
const fetch = require('node-fetch');

const app = express();

const apis = {
  player: 3001,
  chats: 3002,
  carousel: 3003,
  channels: 3004,

}
app.use(express.static('public'));

app.listen(3005, () => {
  console.log('Listening on port 3005');
  });

function apiHandler(path, req, res) {
  if (path in apis) {
    return fetch(`http://${req.hostname}:${apis[path]}${req.url}`)
    .then((results) => results.json())
    .then((results) => res.send(results));
  };
}

app.get('/api/chats/:videoId', (req, res) => {
  return apiHandler('chats', req, res);
});

app.get('/videos/:videoId', (req, res) => {
  return apiHandler('carousel', req, res);
});

app.get('/api/channels/:videoId', (req, res) => {
  return apiHandler('channels', req, res);
});

app.get('/api/livestream/:userId', (req, res) => {
  return apiHandler('player', req, res);
});

app.get('/filter/:videoId/:categoryId', (req, res) => {
  return apiHandler('carousel', req, res);
});

