var https = require('https');

function getAndPrintHTML (options) {
var pathArr = ['sytantris.github.io', '/http-examples/step2.html'];
  var requestOptions = {
    host: pathArr[0],
    path: pathArr[1]
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
getAndPrintHTML(pathArr);