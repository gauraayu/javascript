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



// ============question 1=============
// create a function to calculate total marks and percentage of a student
let student=(sub1,sub2,sub3)=>{
  return sub1+sub2+sub3;
}
let total=student(90,80,70);
    console.log(  " your total marks is "+total + " and percentage is "+total/3 + "%"); // your total marks is 240 and percentage is 80%


    // ===========question 2=============
    // calculate simple interest
    let simpleInterest=(p,r,t)=>{
        return (p*r*t)/100;
    }
    let value=simpleInterest(100,5,2);
    console.log("your simple interest is "+value); // your simple interest is 100


    // ===========question 3=============
    // to add 3 numbers
    let add=(a,b,c)=>{
        return a+b+c;
    }
    let sum2=add(5,6,7);
    console.log("your sum is "+sum2); // your sum is 18


    // ===========question 4=============
    // to check if number is positive or negative
    let check=(num)=>{
        if(num>0){
            return "positive";
        }
        else if(num<0){
            return "negative";
        }
        else{
            return "zero";
        }
    }
    let value1=check(5);
    console.log("your number is "+value1); // your number is positive
// ===========question 5=============
// calculate area of rectangle
let area=(l,b)=>{
    return l*b;
}
let value2=area(5,6);
console.log("your area is "+value2); // your area is 30



//-------------------- USING FOR OF LOOP------------------------------
// it is used in only strings and arrays
let arr=["MERN","JAVA","PYTHON","C++"];
for(let i of arr){
    console.log(i);
}

// --------------------- USING FOR IN LOOP------------------------------
// used in objects
let welcome={
    name:"aayu",
    city:"bhopal",
    age:20,

}
for(let i in welcome){
    console.log(i+"=>"+welcome[i]);
}
// in how many ways value of object can be accesed