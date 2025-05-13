let j="Hello World! World";
let k=j.replace("World","hehehe");
console.log(k);
// -------------to globally replace all the words without using replace all
console.log(j.replace(/World/g,"hehehe"));
// -------------case insensitive replace all
console.log(j.replace(/world/gi,"hehehe"));