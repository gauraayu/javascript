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
    console.log("your number is "+value1);