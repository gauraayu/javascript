let callme=()=>{
    // document.write("hello");//this re,oves all the content from the html page
    // document.getElementById("") //to take specific id
    // document.getElementsByClassName("")// tot take specific class name
    // document.querySelector("#id")//to take specific id
    // document.querySelector(".class")//to take specific class
    let mytag=document.querySelector("#text")
    // mytag.innerHTML="hello world"//to change the content of the html pageinnerhtml supports html tags also
  //to change the content of the html page

 let mtag=document.querySelector(".text")
    mtag.innerHTML="hello heheheheh......"
      mytag.innerText="hello world"
      mytag.style.backgroundColor="red"
      mytag.style.color="white"

}
let btn2=()=>{
   
}
let red=()=>{
  let name=document.querySelector("#color")
  name.style.color="red"
}
let blue=()=>{
  let name=document.querySelector("#color")
  name.style.color="blue"
}
let green=()=>{
  let name=document.querySelector("#color")
  name.style.color="green"
}