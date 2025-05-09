// ----------ques 8--------------- 
var n="madam";
 var original=n; 
    var rev="";
    for(var i = n.length - 1; i >= 0; i--){
        rev=n[i]+rev;
    }
    if(original==rev){
        console.log("Palindrome");
    }
    else{
        console.log("Not Palindrome");
    }