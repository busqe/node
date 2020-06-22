var express = require('express');
var http = require('http')

var app = express();
var porta = 21419;
var data = new Date();
 
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('teste search... ' + data)
}).listen(porta)
 
console.log('Servidor rodando na porta: ' + porta)