// ===============================
// Rudra Consultancy
// database.js
// ===============================

import { db } from "./firebase-config.js";

import {
addDoc,
collection,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// ===============================
// Candidate Registration
// ===============================

const candidateForm =
document.getElementById("candidateForm");

if(candidateForm){

candidateForm.addEventListener("submit",async(e)=>{

e.preventDefault();

try{

await addDoc(

collection(db,"candidates"),

{

name:
document.getElementById("candidateName").value.trim(),

mobile:
document.getElementById("candidateMobile").value.trim(),

email:
document.getElementById("candidateEmail").value.trim(),

qualification:
document.getElementById("candidateQualification").value.trim(),

experience:
document.getElementById("candidateExperience").value.trim(),

preferredJob:
document.getElementById("candidateJob").value.trim(),

address:
document.getElementById("candidateAddress").value.trim(),

createdAt:
serverTimestamp()

}

);

alert("Candidate Registered Successfully");

candidateForm.reset();

}

catch(error){

console.error(error);

alert(error.message);

}

});

}



// ===============================
// Employer Registration
// ===============================

const employerForm =
document.getElementById("employerForm");

if(employerForm){

employerForm.addEventListener("submit",async(e)=>{

e.preventDefault();

try{

await addDoc(

collection(db,"employers"),

{

companyName:
document.getElementById("companyName").value.trim(),

contactPerson:
document.getElementById("contactPerson").value.trim(),

mobile:
document.getElementById("companyMobile").value.trim(),

email:
document.getElementById("companyEmail").value.trim(),

location:
document.getElementById("companyLocation").value.trim(),

jobTitle:
document.getElementById("vacancyName").value.trim(),

salary:
document.getElementById("salary").value.trim(),

vacancy:
document.getElementById("vacancyCount").value.trim(),

description:
document.getElementById("jobDescription").value.trim(),

createdAt:
serverTimestamp()

}

);

alert("Company Registered Successfully");

employerForm.reset();

}

catch(error){

console.error(error);

alert(error.message);

}

});

}



// ===============================
// Vacancy
// ===============================

export async function addVacancy(data){

await addDoc(

collection(db,"vacancies"),

{

...data,

createdAt:
serverTimestamp()

}

);

}



// ===============================
// Application
// ===============================

export async function addApplication(data){

await addDoc(

collection(db,"applications"),

{

...data,

createdAt:
serverTimestamp()

}

);

}



console.log("Rudra Consultancy Database Connected");
