// Rudra Consultancy Admin Panel
// Login Protected Admin Access
// Owner: Sakshi


import { auth, db } from "./firebase-config.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// Check Admin Login

onAuthStateChanged(auth, (user) => {

    if(!user){

        window.location.href = "login.html";

    }

});




// Logout Function

const logoutBtn = document.getElementById("logoutBtn");


if(logoutBtn){

    logoutBtn.addEventListener("click", async()=>{

        await signOut(auth);

        window.location.href = "login.html";

    });

}






// Load Candidates

async function loadCandidates(){

    const table = document.getElementById("candidateTable");


    if(!table) return;


    const snapshot = await getDocs(
        collection(db,"candidates")
    );


    table.innerHTML="";


    snapshot.forEach((doc)=>{


        const data = doc.data();


        table.innerHTML += `

        <tr>

        <td>${data.name || ""}</td>

        <td>${data.mobile || ""}</td>

        <td>${data.email || ""}</td>

        <td>${data.qualification || ""}</td>

        <td>${data.experience || ""}</td>

        </tr>

        `;


    });


    document.getElementById("candidateCount").innerText =
    snapshot.size;


}







// Load Employers

async function loadEmployers(){

    const table = document.getElementById("employerTable");


    if(!table) return;


    const snapshot = await getDocs(
        collection(db,"employers")
    );


    table.innerHTML="";


    snapshot.forEach((doc)=>{


        const data = doc.data();


        table.innerHTML += `

        <tr>

        <td>${data.companyName || ""}</td>

        <td>${data.contactPerson || ""}</td>

        <td>${data.mobile || ""}</td>

        <td>${data.email || ""}</td>

        </tr>

        `;


    });


    document.getElementById("employerCount").innerText =
    snapshot.size;


}







// Load Vacancies

async function loadVacancies(){

    const table = document.getElementById("vacancyTable");


    if(!table) return;


    const snapshot = await getDocs(
        collection(db,"vacancies")
    );


    table.innerHTML="";


    snapshot.forEach((doc)=>{


        const data = doc.data();


        table.innerHTML += `

        <tr>

        <td>${data.jobTitle || ""}</td>

        <td>${data.location || ""}</td>

        <td>${data.salary || ""}</td>

        <td>${data.status || ""}</td>

        </tr>

        `;


    });


    document.getElementById("vacancyCount").innerText =
    snapshot.size;


}






// Start Dashboard

loadCandidates();

loadEmployers();

loadVacancies();


console.log("Rudra Consultancy Admin Secure Panel Loaded");
