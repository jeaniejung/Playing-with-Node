//server.js is module where the HTTMP server code lives
var http = require("http");
function start() {
function onRequest(request, response) {
console.log("Request received.");
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello World");
response.end();
}
http.createServer(onRequest).listen(8888); //or 8080
console.log("Server has started.");
}
exports.start = start;


// var http = require("http"); //requires http module that ships with Node.js and makes it accessible through the variable http

// http.createServer(function(request, response) { /method_name: function(attribute){
	
//},/call one of the functions the http module offers: createServer
// 	//^function is called "anonymous function" cuz no name

// 	response.writeHead(200, {"Content-Type": "text/plain"});
// 	response.write("Hello World");
// 	response.end();
// }).listen(8000);	//createServer returns object that has method 'listen', which takes a numeric value which indicates the PORT NUMBER of the HTTP server




// var http = require("http"); <--This makes our local variable an object that carries all the public
//methods the http module provides.
// var server = http.createServer(); <--createServer() function itself is the parameter 
// server.listen(8888);
//the one above listens at port 8888 but does nothing else, not even answer incoming requests

// var http = require("http");
// function onRequest(request, response) {
// response.writeHead(200, {"Content-Type": "text/plain"});
// response.write("Hello World");
// response.end();
// }
// http.createServer(onRequest).listen(8888);

//Node's underlying execution model is different form runtime environments like Python, Ruby, PHP, or Java
// Benefit of Node.js is that there is only one single process. If there is a slow database query in the process, 
// the whole process is affected and everything comes to a halt until the slow  query is finished. Node.js utilizes an event loop.
// This means that is uses event-driven, asynchronous callbacks . 






















