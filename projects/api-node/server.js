const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'});

    var lang = {"Name":"JavaScript", "Year": "1997", "Notes":"Definitely NOT a mess"};

    res.end(JSON.stringify(lang));
});

const callback = () => {
    const address = server.address().address;
    const port = server.address().port;
    console.log("Starting NODEJS httpd on port 8080...");
}

server
  .listen(
    8080, 
    '',
    callback
  )