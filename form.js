let formvalidate=()=>{
    let inpname=document.querySelector("#name").value   
    let inpnum=document.querySelector("#num").value

    let inpemail=document.querySelector("#email").value
    let inppass=document.querySelector("#pass").value
    let inpcpass=document.querySelector("#cpass").value
    let errname=document.querySelector("#errname")
    let errnumber=document.querySelector("#errnum")
    let erremail=document.querySelector("#erremail")
    let errpass=document.querySelector("#errpass")
    let errcpass=document.querySelector("#errcpass")

if(inpname==""){
    let namebox=document.querySelector("#name")
    namebox.placeholder="please fill name"
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
// else if(inppass==""){
//     let passbox=document.querySelector("#pass")
//     passbox.style.border="1px solid red"
//     errpass.innerHTML="Password is required"
//    errpass.style.color="red"
//    return false
// }
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
else if(!(inpemail.includes("@") && inpemail.includes(".com"))){
    let emailbox=document.querySelector("#email")
    emailbox.style.border="1px solid red"
    erremail.innerHTML="Email should be valid"
   erremail.style.color="red"
   return false
}
// else if(!())
else if(inppass!=inpcpass){
    let passbox=document.querySelector("#pass")
    let cpassbox=document.querySelector("#cpass")
    passbox.style.border="1px solid red"
    cpassbox.style.border="1px solid red"
    errcpass.innerHTML="Password and Confirm Password should be same"
   errcpass.style.color="red"
   return false }

   else if(!(inppass.match(/[1234567890]/)
            && inppass.match(/[!@#$%^&*()+]/)
            && inppass.match(/[a-z]/)
            && inppass.match(/[A-Z]/))){
                errcpass.innerHTML="please enter strong password"
                return false

   }
   
}