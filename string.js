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
let j="Hello World! World";
let k=j.replace("World","hehehe");
console.log(k);
// -------------to globally replace all the words without using replace all
console.log(j.replace(/World/g,"hehehe"));
// -------------case insensitive replace all
console.log(j.replace(/world/gi,"hehehe"));
//replace method only replaces the first occurrence of the string it dosnt replace all the occurrences
// ----------replaceAll---------
let l1="Hello World! World";
let m1=l1.replaceAll("World","hehehe");
console.log(m1);
// ----------charAt---------
let l="Hello World!";
let m=l.charAt(4);
console.log(m);
// ----------charCodeAt---------
// //GIVES ascii VALUE
let n1="Hello World!";
let o1=n1.charCodeAt(0);
console.log(o1);
// ----------indexOf---------
let n="Hello World!";   
let o=n.indexOf("W");
console.log(o);
// ----------lastIndexOf---------
let p="Hello World!";
let q=p.lastIndexOf("W");
console.log(q);
// let fruits=["Banana","Orange","Apple","Mango"];

// ----------split---------
let ar="this is a string"   
console.log(ar.split(" "));
let ar1="this-is-a s-tring"
console.log(ar1.split("-"));