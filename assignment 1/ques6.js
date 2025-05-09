// ----         -ques 6      ----------
var i=prompt("Enter a number from 1 to 100: ");
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Best");
    } else if (i % 3 === 0) {
        console.log("Good");
    } else if (i % 5 === 0) {
        console.log("Better");
    } else {
        console.log(i);
    }
}
