var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1'); // remove the ip argument from listen. otherwise it will bind only to this ip address. and you wont be able to connect if it runs on a server.
console.log('Server running at http://127.0.0.1:1337/');