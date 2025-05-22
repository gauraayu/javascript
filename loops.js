// ---------------MAP -------------------
// iterates every element in an array
// they return a new array
// they do not change the original array
// ------------------FILTER------------------
// iterates every element in an array
// filters the data and returns a new array

// -----------------------MAP----------------------

let num=[3,6,7,9,2,15];
let newnum=num.map((e)=>{
return e*2;
})
console.log(newnum); // [6, 12, 14, 18, 4, 30]
// multiplying by itselg
let newnum1=num.map((e)=>{
    return e*e;
})
console.log(newnum1); // [9, 36, 49, 81, 4, 225]



// -----------------------FILTER----------------------
// to filter the even numbers
let num2=[3,6,7,9,2,15];
let newnum2=num.map((e)=>{
return e%2==0;
})
console.log(newnum2);

// ------------------------for each---------------------
let fruits=["apple","banana","mango","orange"];
fruits.forEach((e)=>{
    console.log(e);
})

//    using     call back function
let fruits1=["apple","banana","mango","orange"];
let newfruits=fruits1.map((e)=>{
    return e.length;
})