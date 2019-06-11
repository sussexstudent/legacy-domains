const http = require('http');
const url = require('url');

function headTo(response, url) {
  response.writeHead(302, {
    'Location': url
  });
  response.end();
}

  function onRequest (request, response){
    switch (request.url){
        case "activeus.co.uk":
            headTo(response, 'https://www.sussexstudent.com/organisation/activeus/');
            break;
        case "/page2":
            break;
        default:
            break;
    }
}

http.createServer(onRequest).listen(process.env.PORT);
console.log(`legacy-domains on ${process.env.PORT}`);