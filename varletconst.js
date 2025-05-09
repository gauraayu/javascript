// function redeclaration(){
// // redecleration
// var a=10
// var a=16
// console.log(a)
// // let and const came in year 2015
// // reclaration is not allowed in let and const
// // let and const are block scoped
// // js is top to bottom approch it will show 16 anss



// let b=10;
// // let b //show error


// const c=20;
// // const c //show error
// // const c=30 //show error
// }   


// redeclaration()

// ----------------------------------reassignment------------------
function reassignment(){
var age=5;
age=6
console.log(age) //6
// let and const
// let and const are not reassignable
// -----let---------
let age1=5
age1=6
console.log(age1) //6

// ----const-------
const age2=5
age2=9
console.log(age2) //error
// const is not reassignable
}
reassignment()
// ----------------------------scopes-----------------------
// functiom scope=value pure function pr rhe skti h (var )  
// block s var ko frk nhi pdhta
// block scope=arrow function pr rhe skti h ==={block scope}(const and let)

function scope(){
    var a=10
   {
        var a=20
        console.log(a) //20
   }
    console.log(a) //20
    // var is function scope
}

let a=10
{
    let a=20
    console.log(a) //20
    // let block k andar h islie error nhi agr block nhi hota toh error show krta
}
console.log(a) //10
// let is block scope
    scope()