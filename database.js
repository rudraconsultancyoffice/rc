// Rudra Consultancy Database
// Part 1

import { db } from "./firebase-config.js";

import {
addDoc,
collection,
serverTimestamp
}
from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// ----------------------------
// Candidate Registration
// ----------------------------

const candidateForm =
document.getElementById("candidateForm");



if(candidateForm){

candidateForm.addEventListener("submit",

async function(e){

e.preventDefault();

try{

await addDoc(

collection(db,"candidates"),

{

name:

document.getElementById("candidateName").value,

mobile:

document.getElementById("candidateMobile").value,

email:

document.getElementById("candidateEmail").value,

qualification:

document.getElementById("candidateQualification").value,

experience:

document.getElementById("candidateExperience").value,

preferredJob:

document.getElementById("candidateJob").value,

address:

document.getElementById("candidateAddress").value,

createdAt:

serverTimestamp()

}

);

alert("Candidate Registered Successfully.");

candidateForm.reset();

}

catch(error){

console.log(error);

alert("Registration Failed.");

}

});

}



// ----------------------------
// Employer Registration
// ----------------------------

const employerForm =
document.getElementById("employerForm");



if(employerForm){

employerForm.addEventListener(

"submit",

async function(e){

e.preventDefault();

try{

await addDoc(

collection(db,"employers"),

{

companyName:

document.getElementById("companyName").value,

contactPerson:

document.getElementById("contactPerson").value,

mobile:

document.getElementById("companyMobile").value,

email:

document.getElementById("companyEmail").value,

location:

document.getElementById("companyLocation").value,
    jobTitle:

document.getElementById("vacancyName").value,

salary:

document.getElementById("salary").value,

vacancy:

document.getElementById("vacancyCount").value,

description:

document.getElementById("jobDescription").value,

createdAt:

serverTimestamp()

}

);

alert("Company Registered Successfully.");

employerForm.reset();

}

catch(error){

console.error(error);

alert("Registration Failed.");

}

});

}



// ----------------------------
// Vacancy Collection (Optional)
// ----------------------------

async function addVacancy(data){

try{

await addDoc(

collection(db,"vacancies"),

{

...data,

createdAt: serverTimestamp()

}

);

console.log("Vacancy Saved");

}

catch(error){

console.error(error);

}

}



// ----------------------------
// Application Collection (Optional)
// ----------------------------

async function addApplication(data){

try{

await addDoc(

collection(db,"applications"),

{

...data,

createdAt: serverTimestamp()

}

);

console.log("Application Saved");

}

catch(error){

console.error(error);

}

}



console.log("Rudra Consultancy Database Connected");
