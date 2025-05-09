
// -----------------ques 3-------------------
var a=14;
var b=21;
var ans;
for(var i=1;i<=a && i<=b;i++){
    if(a%i==0 && b%i==0){
        ans=i;
    }
}
var lcm=(a*b)/ans;
console.log(lcm); // 42
