const _http = require('http');
const _url = require('url');
const route = require('../app/router');

_http.createServer(onRequest).listen(9090);

function onRequest(request, response){
  let pathName = _url.parse(request.url).pathname;

  route(pathName);
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello World\n')

  response.end();
}

console.log(__filename, __dirname)
console.log('Server running at http://127.0.0.1:9090/');
