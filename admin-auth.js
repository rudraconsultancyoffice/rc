import { auth } from "./firebase-config.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


onAuthStateChanged(auth,(user)=>{

if(!user){

window.location.href="login.html";

}

});


const logoutBtn =
document.getElementById("logoutBtn");


if(logoutBtn){


logoutBtn.addEventListener("click",async()=>{


await signOut(auth);


window.location.href="login.html";


});


}
