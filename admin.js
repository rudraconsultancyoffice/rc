// ===================================
// Rudra Consultancy
// admin.js FINAL PART 1
// ===================================

import { db } from "./firebase-config.js";
import {
collection,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const candidateTable=document.getElementById("candidateTable");
const employerTable=document.getElementById("employerTable");



// ===========================
// Load Candidates
// ===========================

async function loadCandidates(){

candidateTable.innerHTML="";

const snapshot=await getDocs(
collection(db,"candidates")
);

snapshot.forEach((document)=>{

const data=document.data();

candidateTable.innerHTML+=`

<tr>

<td>${data.name||""}</td>

<td>${data.mobile||""}</td>

<td>${data.email||""}</td>

<td>${data.qualification||""}</td>

<td>${data.preferredJob||""}</td>

<td>

<button
class="deleteBtn"
onclick="deleteCandidate('${document.id}')">

Delete

</button>

</td>

</tr>

`;

});

}



// ===========================
// Delete Candidate
// ===========================

window.deleteCandidate=async(id)=>{

if(!confirm("Delete Candidate ?"))
return;

await deleteDoc(
doc(db,"candidates",id)
);

loadCandidates();

loadDashboard();

};



// ===========================
// Load Employers
// ===========================

async function loadEmployers(){

employerTable.innerHTML="";

const snapshot=await getDocs(
collection(db,"employers")
);

snapshot.forEach((document)=>{

const data=document.data();

employerTable.innerHTML+=`

<tr>

<td>${data.companyName||""}</td>

<td>${data.contactPerson||""}</td>

<td>${data.mobile||""}</td>

<td>${data.email||""}</td>

<td>

<button
class="deleteBtn"
onclick="deleteEmployer('${document.id}')">

Delete

</button>

</td>

</tr>

`;

});

}
// ===========================
// Delete Employer
// ===========================

window.deleteEmployer = async(id)=>{

if(!confirm("Delete Employer ?"))
return;

await deleteDoc(
doc(db,"employers",id)
);

loadEmployers();

loadDashboard();

};



// ===========================
// Dashboard Count
// ===========================

async function loadDashboard(){

const candidateSnapshot =
await getDocs(collection(db,"candidates"));

const employerSnapshot =
await getDocs(collection(db,"employers"));

const vacancySnapshot =
await getDocs(collection(db,"vacancies"));

document.getElementById("candidateCount").innerText =
candidateSnapshot.size;

document.getElementById("employerCount").innerText =
employerSnapshot.size;

document.getElementById("vacancyCount").innerText =
vacancySnapshot.size;

}



// ===========================
// Candidate Search
// ===========================

const searchBox =
document.getElementById("searchCandidate");

if(searchBox){

searchBox.addEventListener("keyup",()=>{

const value =
searchBox.value.toLowerCase();

const rows =
document.querySelectorAll("#candidateTable tr");

rows.forEach((row)=>{

const text =
row.innerText.toLowerCase();

row.style.display =
text.includes(value)
? ""
: "none";

});

});

}



// ===========================
// Start Dashboard
// ===========================

loadCandidates();

loadEmployers();

loadDashboard();

console.log("Admin Dashboard Ready");
