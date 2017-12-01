var fs = require('fs');
let calc = (a, b) => { console.log("compairing", a, " + ", b, "=", a === b ? a : 0); return a === b ? Number.parseInt(a) : 0 };

fs.readFile('01-01.txt', function(err, data) {
  if(err) throw err;
  var array = data.toString().split("");
  let sum = 0;
  array.forEach((v, i, a) => {
    if(i + 1 != a.length) {
      sum += calc(v, a[i + 1]);
    } else {
      sum += calc(v, a[0])
    }
  });

  console.log("Captcha is: ", sum);
});





// let sum = 0;
// arr.forEach((v, i, a) => {
//   if(i + 1 != a.length) {
//     sum += calc(v, a[i + 1]);
//   } else {
//     sum += calc(v, a[0])
//   }
// });

// console.log(sum);