// ---------------ques 1----------------------

var n = 9873;
var reversed_num = 0;
var digit = 0;
while (n > 0) {
     digit = n % 10;
     reversed_num = (reversed_num * 10) + digit;
    n = Math.floor(n/10);
  }

console.log(reversed_num); // 3789