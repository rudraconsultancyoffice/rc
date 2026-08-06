// Rudra Consultancy Admin Login
// Firebase Authentication
// Owner: Sakshi


import { auth } from "./firebase-config.js";

import { 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const loginForm = document.getElementById("loginForm");

const message = document.getElementById("message");



loginForm.addEventListener("submit", async (e) => {


    e.preventDefault();



    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();



    if(email === "" || password === ""){

        message.innerText = "Please enter email and password";

        message.style.color = "red";

        return;

    }



    try{


        const userCredential = await signInWithEmailAndPassword(

            auth,

            email,

            password

        );



        console.log(
            "Login User:",
            userCredential.user.uid
        );



        message.innerText = "Login Successful";

        message.style.color = "green";



        setTimeout(()=>{


            window.location.href = "admin.html";


        },1000);



    }



    catch(error){


        console.log(
            "Login Error:",
            error.code,
            error.message
        );



        if(error.code === "auth/invalid-credential"){

            message.innerText =
            "Wrong Email or Password";

        }

        else if(error.code === "auth/user-not-found"){

            message.innerText =
            "User not found";

        }

        else if(error.code === "auth/wrong-password"){

            message.innerText =
            "Wrong password";

        }

        else{

            message.innerText =
            error.message;

        }


        message.style.color = "red";


    }


});
