//------------------- ques 2----------------------------
var n =2873;
var last_digit = n % 10;
var first_digit=n;
while (first_digit >= 10) {
    first_digit = Math.floor(first_digit / 10);
}   
console.log(first_digit+last_digit); // 2




