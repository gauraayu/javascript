var count = 0
var display = document.querySelector("#counter")
let increment = () => {


    count++;
    display.innerHTML = count
}
let decrement = () => {
if(count>0){
    count--;
    display.innerHTML = count}
    
}

let change1=()=>{
let box=document.querySelector("#box")
box.style.backgroundColor="red"
}
let change2=()=>{
    let box=document.querySelector("#box")
box.style.backgroundColor="blue"
}