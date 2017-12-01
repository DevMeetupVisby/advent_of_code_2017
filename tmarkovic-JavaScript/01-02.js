var fs = require('fs');
fs.readFile('01-02.txt', function(err, data) {
  if(err) throw err;
  var array = data.toString().split("");

  console.log(
    array.map((v, i, a) => [~~v, ~~a[(a.length + i + ((a.length / 2) % a.length)) % a.length]])
      .filter((v) => v[0] === v[1])
      .map(v => v[0])
      .reduce((p, c) => p + c));
});