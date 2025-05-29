let formvalidate=()=>{
    let inpname=document.querySelector("#name").value   
    let inpnumber=document.querySelector("#num").value

    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#pass").value
    let inpcpass=document.querySelector("#cpass").value
    let errname=document.querySelector("#errname")
    let errnumber=document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")
}
if(inpname==""){
    let namebox=document.querySelector("#name")
    namebox.style.border="1px solid red"
    errname.innerHTML="Name is required"
   errname.style.color="red"
   return false

}
else if(inpnum==""){
    let numbbox=document.querySelector("#num")
    numbbox.style.border="1px solid red"
    errnumber.innerHTML="Number is required"
   errnumber.style.color="red"
   return false
}
else if(inpemail==""){
    let emailbox=document.querySelector("#email")
    emailbox.style.border="1px solid red"
    erremail.innerHTML="Email is required"
   erremail.style.color="red"
   return false
}
else if(inppass==""){
    let passbox=document.querySelector("#pass")
    passbox.style.border="1px solid red"
    errpass.innerHTML="Password is required"
   errpass.style.color="red"
   return false
}
else if(isNaN(inpnum)){
    let numbbox=document.querySelector("#num")
    numbbox.style.border="1px solid red"
    errnumber.innerHTML="Number should be a number"
   errnumber.style.color="red"
   return false
}
// no should only be 10
else if(inpnum.length!=10){
    errnum.innerHTML="Number should be 10 digits"
    errnum.style.color="red"
}