const http = require('http');

// case GET -> получить обработать
http.createServer((req, res) => {
  console.log('server work')
}).listen(3000);