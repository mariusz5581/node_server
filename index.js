var http = require('http');
var fs = require('fs');

console.log('Starting server on port 80');
http.createServer(function (req,res){
    fs.readFile('index.html', function (err, data){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(80);