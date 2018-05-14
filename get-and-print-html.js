var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

https.get(requestOptions, function (response){
    response.setEncoding('utf8');
    var buffer = {};

    response.on('data', function (chunk) {
      buffer += chunk;
      console.log(buffer + '/n/n/n');
    });
    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}
getAndPrintHTML();