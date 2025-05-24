let callme=()=>{
    // document.write("hello");//this re,oves all the content from the html page
    // document.getElementById("") //to take specific id
    // document.getElementsByClassName("")// tot take specific class name
    // document.querySelector("#id")//to take specific id
    // document.querySelector(".class")//to take specific class
    let mytag=document.querySelector("#text")
    // mytag.innerHTML="hello world"//to change the content of the html pageinnerhtml supports html tags also
  //to change the content of the html page

//  let mtag=document.querySelector(".text")
//     mtag.innerHTML="hello heheheheh......"
//       mytag.innerText="hello world"
//       mytag.style.backgroundColor="red"
//       mytag.style.color="white"

// }
// let btn2=()=>{
   
}

let red=()=>{
 let name=document.querySelector(".box")
  // name.style.backgroundColor="red"
  name.style.border="2px solid black"
  name.style.backgroundImage="url('https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg')"
}
let blue=()=>{
 let name=document.querySelector(".box")
  // name.style.color="blue"
  // name.style.backgroundColor="blue"
  name.style.border="2px solid black"
  name.style.backgroundImage="url('https://media.istockphoto.com/id/154948874/photo/crescent-moon-on-twilight-sky.jpg?s=612x612&w=0&k=20&c=6gC3s9SQpmdob4P2WKkmRfk6w4NGw8zqccsh5kaORXQ=')"
}
let reset=()=>{
 let name=document.querySelector(".box")
  name.style.backgroundColor="white"
  
}

