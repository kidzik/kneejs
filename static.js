var http = require('http');

var nStatic = require('node-static');

var fileServer = new nStatic.Server({ rootPath: "public",
				      cors: '*',
				      headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Access-Control-Allow-Headers': 'X-Requested-With,Content-Type',
    'Access-Control-Allow-Credentials': true
}});

http.createServer(function (req, res) {
    
    fileServer.serve(req, res);

}).listen(4000);
