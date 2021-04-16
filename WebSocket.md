# WebSocket
https://github.com/websockets/ws

## 설치
```sh
npm install ws
```

## Server
server.js
```js
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function(ws) {
  ws.onmessage = function(event) {
    console.log(event.data);
  };
  ws.send('Hi!');
});
```
```js
node server.js
```

## Client
client.js
```js
const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:3000');

ws.onmessage = function(event) {
  console.log(event.data);
};
ws.onopen = function() {
  ws.send('Hello!');
};
```
```js
node client.js
```

## error, close
server.js & client.js
```js
ws.onerror = function(event) {
  console.error(event.error);
};
ws.onclose = function(event) {
  console.warn(event.code);
};
```

