(function () {
  'use strict';

  const WebSocketServer = require('ws').Server;
  const ws = new WebSocketServer({
    port: 8282
  });

  ws.on('connection', function (ws) {
    console.log('客户端以及连接啦')
    ws.on('message', function (message) {
      console.log(message)
      ws.send('123')
    })
  })
})