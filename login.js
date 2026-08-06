// Rudra Consultancy Admin Login
// Firebase Authentication
// Owner: Sakshi


import { auth } from "./firebase-config.js";


import {

signInWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";





const loginForm = document.getElementById("loginForm");

const message = document.getElementById("message");





loginForm.addEventListener("submit", async function(e){


e.preventDefault();



const email =
document.getElementById("email").value;



const password =
document.getElementById("password").value;





try{


await signInWithEmailAndPassword(

auth,

email,

password

);




message.innerText =
"Login Successful...";



message.style.color =
"green";



setTimeout(()=>{


window.location.href =
"admin.html";


},1000);




}



catch(error){


console.log(error);



message.innerText =
"Invalid Email or Password";



message.style.color =
"red";


}



});
