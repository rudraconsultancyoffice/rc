// ===============================
// Rudra Consultancy
// database.js
// FINAL PART 1
// ===============================

import { app, db } from "./firebase-config.js";

import {
addDoc,
collection,
serverTimestamp
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
getStorage,
ref,
uploadBytes,
getDownloadURL
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const storage = getStorage(app);

// ===============================
// Candidate Registration
// ===============================

const candidateForm =
document.getElementById("candidateForm");

if(candidateForm){

candidateForm.addEventListener(

"submit",

async(e)=>{

e.preventDefault();

try{

const name =
document.getElementById("candidateName").value.trim();

const mobile =
document.getElementById("candidateMobile").value.trim();

const email =
document.getElementById("candidateEmail").value.trim();

const qualification =
document.getElementById("candidateQualification").value.trim();

const experience =
document.getElementById("candidateExperience").value.trim();

const preferredJob =
document.getElementById("candidateJob").value.trim();

const address =
document.getElementById("candidateAddress").value.trim();

const resumeFile =
document.getElementById("candidateResume").files[0];

let resumeURL="";

if(resumeFile){

const fileRef = ref(

storage,

"resumes/"+Date.now()+"_"+resumeFile.name

);

await uploadBytes(

fileRef,

resumeFile

);

resumeURL =
await getDownloadURL(fileRef);

}

await addDoc(

collection(db,"candidates"),

{

name,

mobile,

email,

qualification,

experience,

preferredJob,

address,

resume:resumeURL,

createdAt:serverTimestamp()

}

);

alert("Candidate Registered Successfully");

candidateForm.reset();

}

catch(error){

console.error(error);

alert(

"Error : "+error.message

);

}

});

}

// ===============================
// Employer Registration
// ===============================

const employerForm =
document.getElementById("employerForm");

if(employerForm){

employerForm.addEventListener(

"submit",

async(e)=>{

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

alert(
"Error : " + error.message
);

}

});

}

// ===============================
// Vacancy Collection
// ===============================

export async function addVacancy(data){

try{

await addDoc(

collection(db,"vacancies"),

{

...data,

createdAt:serverTimestamp()

}

);

console.log("Vacancy Saved");

}

catch(error){

console.error(error);

}

}

// ===============================
// Application Collection
// ===============================

export async function addApplication(data){

try{

await addDoc(

collection(db,"applications"),

{

...data,

createdAt:serverTimestamp()

}

);

console.log("Application Saved");

}

catch(error){

console.error(error);

}

}

// ===============================
// Database Ready
// ===============================

console.log("Rudra Consultancy Database Connected Successfully");
