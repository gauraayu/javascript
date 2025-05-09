function hoisting(){
// -------------var----------------
// console.log(a) //undefined
// var a=10
// undefined is printed because of hoisting
// sirf var a is declared but not initialized
// so it is undefined


// ---------let---------------
console.log(b) //error // let b is not hoisted
let b=10
}
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
// This means that you can use variables and functions before they are declared in the code.