function triangular(n) {
  var j = 1;
  var k = 1;
  for (var i = 1; i <= n; i++){
    console.log(k);
    j = j + 1;
    k = k + j;
  }
}

var n = 10;
triangular(n);
