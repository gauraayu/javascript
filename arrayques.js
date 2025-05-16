// QUES 1---------------------------------------

let arr=[2,4,6,8,10];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum=sum+arr[i];
}
console.log(sum);
// QUES 2---------------------------------------
let arr1=[3,7,2,9,5];
let max=arr1[0];
for(let i=0;i<arr1.length;i++){
    if(arr1[i]>max){
        max=arr1[i];
    }
}
console.log(max);
// QUES 3---------------------------------------
let arr2=[1,2,3,4,5,6,7,8,9,10];
let even=0;
let odd=0;
for(let i=0;i<arr2.length;i++){
    if(arr2[i]%2==0){
        even++;
    }
    else{
        odd++;
    }
}   
console.log("even no. are ",even);
console.log("odd no. are ",odd);
// QUES 4---------------------------------------
// reverse the array
let arr3=[10,20,30,40,50];
let revarr=[];
for(let i=arr3.length-1;i>=0;i--){
    revarr.push(arr3[i]);
}
console.log(revarr);
// QUES 5---------------------------------------
// check if element exist in array
let arr4=[3,5,7,9,11];
let num=9;
let found=false;
for(let i=0;i<arr4.length;i++){
    if(arr4[i]==num){
        found=true;
       
    }
}
console.log(found);
// QUES 6---------------------------------------
// merge two arrays
let arr5=[1,2,3];
let arr6=[4,5,6];
let mergedarr=[];
for(let i=0;i<arr5.length;i++){
    mergedarr.push(arr5[i]);
}
console.log(mergedarr);
for(let i=0;i<arr6.length;i++){
    mergedarr.push(arr6[i]);
}
console.log(mergedarr);
