var http = require("http");http.createServer(function (req, res) {	res.writeHead(200, {"Content-Type": "text/plain"});	res.end("Hello Node.js\n");}).listen(8080, "localhost");console.log("Server running at http://localhost:8080/");