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
// 통신 중 에러가 발생할 경우
ws.onerror = function(event) {
  console.error(event.error);
};

// server 또는 client 중 어느 하나가 통신을 끊는 경우
ws.onclose = function(event) {
  console.warn(event.code);
};
```

## Others
* 해당 Client 빼고 나머지 Clients에게 메시지를 보내기

server.js
```diff
- ws.onmessage = function(event) {
-   console.log(event.data);
- };
```
```js
ws.onmessage = function(event) {
  console.log(event.data);
  wss.clients.forEach(function(client) {
    if (client !== ws) {
      client.send('Halo! Others');
    }
  });
};
```
