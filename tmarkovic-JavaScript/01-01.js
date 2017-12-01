var fs = require('fs');
fs.readFile('01-01.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("");
    console.log(array);
});