// var https = require('https');

/*function getAndPrintHTML (options) {
  // var pathArr = ['sytantris.github.io', '/http-examples/step2.html'];
  
  };

https.get(requestOptions, function (response){
    response.setEncoding('utf8');
    var buffer = {};

    response.on('data', function (chunk) {
      buffer += chunk;
      console.log(buffer + '\n\n\n');
    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}
var requestOptions = {
  host: ‘sytantris.github.io’,
  path: ‘/http-examples/step3.html’
 };
 getAndPrintHTML(requestOptions); */

 // while https is built-in to Node, it is a module, so it must be required
var https = require('https');                              
// the host can be thought of as the domain name you want to read from,
// and the path is the resource - ‘/’ is the root path, but if you wanted to read a
// particular resource (like ‘/login/index.html’), that would be defined in the path
function getAndPrintHTML (options) {
 https.get(options, function (response) {
   // set encoding of received data to UTF-8
   response.setEncoding('utf8');
   var buf = '';
   response.on('data',function(chunk){
     buf += chunk;
   });
   response.on('end', function() {
     console.log('Response stream complete');
     console.log(buf);
   });
 });
}
var requestOptions = {
 host: 'sytantris.github.io',
 path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);