# WebSocket
* https://github.com/websockets/ws
<!-- * https://poiemaweb.com/nodejs-socketio
* https://sub0709.tistory.com/40 -->

## 설치
```sh
npm install ws
```

## Server
server.js
```js
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ port: 3100 });

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
const ws = new WebSocket('ws://localhost:3100');

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

## Server broadcast
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

## Express Server와 WebSocketServer 연동
index.js
### app을 http.createServer로 감싸기
```diff
- app.listen(3100);
```
```js
const http = require('http');
const server = http.createServer(app).listen(3100);
```

### 통신 부분
```diff
- const wss = new WebSocketServer({ port: 3100 });
```

```js
const WebSocketServer = require('ws').Server;
const wss = global.wss = new WebSocketServer({ noServer: true });

wss.on('connection', function(ws) {
  ws.onmessage = function(event) {
    console.log(event.data);
  };
  ws.send('Hi!');
});
```

### Express Server와 WebSocketServer 연동
```js
server.on('upgrade', function(request, socket, head) {
  if (request.url === '/') {
    wss.handleUpgrade(request, socket, head, function(ws) {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});
```

### Express Server Router에서 WebSocket 활용
routes/members.js
```js
router.get('/', function(request, response) {
  const wss = global.wss;
  wss.clients.forEach(function(client) {
    client.send('Halo!');
  });
```
