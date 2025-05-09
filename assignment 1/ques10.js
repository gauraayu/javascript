var a=prompt("Enter time in 24 hours format: ");
if(a>=1 && a<12){
    alert("Good Morning");
}
else if(a>=12 && a<17){
    alert("Good Afternoon");
}
else if(a>=17 && a<21){
    alert("Good Evening");
}
else if(a>=21 && a<=24){
    alert("Good Night");
}
else{
    alert("Invalid time");
}