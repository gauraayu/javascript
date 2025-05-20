// function in js to create an object
// 4 types of functions

// 1. arrow function
// 2. constructor function
// 3. anonymous function=has no value
// ============arrow function============
let obj = () => {
    console.log("hello");
}
obj(); // hello

// ============parameterized constructor function============
let obj1 = (name,age) => {
    console.log("hello "+name + " your age is "+age);                           
}
obj1("aayu",25); // argumnt

  let obj2=(a,b)=>{
    console.log(a+b);
  }
  obj2(6,7)

//   ==============return function=============
let aayu=(a,b)=>{
    return a+b;
}
let sum=aayu(5,6);
console.log(sum); // 11


// OR
let aayu1=(a,b)=>a+b;//for 1 liner codes we can remove curly braces and retrun keyword
let sum1=aayu1(5,6);
console.log(sum1); // 11