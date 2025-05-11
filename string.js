//anything under single(' ') or double quotes("") is considered as a string

// length() ------> Returns the length of the string 
// slice()  ------> Returns the elements between the two indexes of a string 
// concat() ------> Combines the text of two strings and returns a new string
// substring()----> Returns the elements between the two indexes of a string 
// replace() -----> Used to find a matching text and replaces the text with string 
// toUpperCase()--> Converts all the alphabets of a string into uppercase 
// toLowerCase()--> Converts all the alphabets of a string into lowercase 
// trim()   ------> Removes the leading and trailing white space and line terminator




let txt="    Hello World!     ";//trim() removes whitespace from both sides of a string
let txt1=txt.trim();

// ----------length----------
let a="jayesh";
console.log(a.length);

// ----------slice----------
let b="Hello World!";
let c=b.slice(1,6);
// slice m last-1 krna hota
console.log(c);

// ----------concat---------
let d1="Hello";
let d2="hiiiii!";
let d3=d1.concat(" ",d2);
console.log(d3);

// ----------uppercase---------
let d="hello world";
let e=d.toUpperCase();
console.log(e);
// ----------lowercase---------
let f="HELLO WorLD";
let g=f.toLowerCase();
console.log(g);
// ----------substring---------
let h="Hello World!";
let i=h.substring(1,6);
console.log(i);
// ----------replace---------   
let j="Hello World!";
let k=j.replace("World","hehehe");
console.log(k);