// script.js
// Rudra Consultancy Website

// Smooth Scroll Navigation
document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});



// Apply Button Action

document.querySelectorAll(".apply-btn").forEach(button => {

    button.addEventListener("click", () => {

        document
            .getElementById("candidate")
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});



// Candidate Registration Success

const candidateForm =
document.getElementById("candidateForm");

if(candidateForm){

candidateForm.addEventListener("submit",()=>{

setTimeout(()=>{

alert(
"Thank you for registering with Rudra Consultancy."
);

},500);

});

}



// Employer Registration Success

const employerForm =
document.getElementById("employerForm");

if(employerForm){

employerForm.addEventListener("submit",()=>{

setTimeout(()=>{

alert(
"Company registration submitted successfully."
);

},500);

});

}



// Footer Year

const footer =
document.querySelector("footer p");

if(footer){

footer.innerHTML =
`© ${new Date().getFullYear()} Rudra Consultancy. All Rights Reserved.`;

}



console.log("Rudra Consultancy Website Loaded");
// ===============================
// Load Vacancies From Firebase
// Rudra Consultancy
// ===============================

import { db } from "./firebase-config.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const jobContainer = document.getElementById("jobContainer");


async function loadVacancies(){

if(!jobContainer) return;


jobContainer.innerHTML = "";


const snapshot = await getDocs(
collection(db,"vacancies")
);


if(snapshot.empty){

jobContainer.innerHTML =
"<p>No Latest Vacancies Available</p>";

return;

}



snapshot.forEach((doc)=>{


const data = doc.data();



jobContainer.innerHTML += `

<div class="job-box">

<h3>${data.jobTitle || ""}</h3>

<p>

Location : ${data.location || ""}

<br>

Salary : ${data.salary || ""}

<br>

Qualification : ${data.qualification || ""}

</p>


<button class="apply-btn">

Apply Now

</button>


</div>

`;



});


}



loadVacancies();
