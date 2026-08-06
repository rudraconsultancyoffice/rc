// Rudra Consultancy Admin Panel
// Firebase Live Data
// Owner: Sakshi


import { db } from "./firebase-config.js";


import {

collection,
getDocs

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";






// Load Candidates


async function loadCandidates(){


const table =
document.getElementById("candidateTable");


try{


const snapshot = await getDocs(

collection(db,"candidates")

);



table.innerHTML = "";



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


catch(error){

console.log(error);

}


}









// Load Employers


async function loadEmployers(){


const table =
document.getElementById("employerTable");



try{


const snapshot = await getDocs(

collection(db,"employers")

);



table.innerHTML = "";



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



catch(error){

console.log(error);

}


}









// Load Vacancies


async function loadVacancies(){


const table =
document.getElementById("vacancyTable");



try{


const snapshot = await getDocs(

collection(db,"vacancies")

);



table.innerHTML = "";



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


catch(error){

console.log(error);

}


}









// Load Applications


async function loadApplications(){


const table =
document.getElementById("applicationTable");



try{


const snapshot = await getDocs(

collection(db,"applications")

);



table.innerHTML = "";



snapshot.forEach((doc)=>{


const data = doc.data();



table.innerHTML += `

<tr>

<td>${data.candidateName || ""}</td>

<td>${data.jobApplied || ""}</td>

<td>${data.mobile || ""}</td>

<td>${data.status || ""}</td>

</tr>

`;



});



}


catch(error){

console.log(error);

}


}









// Start Loading Data


loadCandidates();

loadEmployers();

loadVacancies();

loadApplications();





console.log(

"Rudra Consultancy Admin Panel Connected\nOwner: Sakshi"

);
