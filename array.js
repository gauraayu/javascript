let fruits=["Banana","Orange","Apple","Mango"];

fruits.pop(); // Removes the last element from the array
fruits.push("Kiwi"); // Adds a new element to the end of the arrayz
fruits.shift(); // Removes the first element from the array
fruits.unshift("Lemon","apple"); // Adds a new element to the beginning of the array
// fruits.splice(2,0,"Lemon","Kiwi"); // Adds new elements at a specified position in the array
console.log(fruits);
console.log(fruits[1]); // Accessing the second element of the array
console.log(fruits.length); // Getting the length of the array
// fruits.sort(); // Sorts the array
// to convert array to string
let text=fruits.toString();
console.log(text); // Converts the array to a string
// to convert array to string with join
let text1=fruits.join(" * ");
console.log(text1); // Converts the array to a string with a specified separator
// using type of opeartor
let text2=typeof (text1);
console.log(text2); // Returns the type of the variable