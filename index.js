var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Team Stream p2p\n');
}).listen(process.env.PORT);