const http = require('http');
const url = require('url');

function headTo(response, url) {
  response.writeHead(302, {
    'Location': url
  });
  response.end();
}

  function onRequest (request, response){
    switch (request.headers.host){
        case "activeus.co.uk":
            headTo(response, 'https://www.sussexstudent.com/organisation/activeus/');
            break;
        case "wwww.activeus.co.uk":
            headTo(response, 'https://www.sussexstudent.com/organisation/activeus/');
            break;
        default:
            break;
    }
}

http.createServer(onRequest).listen(process.env.PORT);
console.log(`legacy-domains on ${process.env.PORT}`);