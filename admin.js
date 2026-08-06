// ===================================
// Rudra Consultancy
// admin.js FINAL
// ===================================

import { db, auth } from "./firebase-config.js";


import {
// ===============================
// Admin Login Check
// ===============================

import {
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


onAuthStateChanged(auth,(user)=>{

if(!user){

window.location.href="login.html";

}

});
collection,

getDocs,

deleteDoc,

doc,

addDoc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// Tables

const candidateTable =
document.getElementById("candidateTable");


const employerTable =
document.getElementById("employerTable");


const vacancyTable =
document.getElementById("vacancyTable");




// ===========================
// Load Candidates
// ===========================

async function loadCandidates(){


candidateTable.innerHTML="";


const snapshot =
await getDocs(
collection(db,"candidates")
);



snapshot.forEach((document)=>{


const data =
document.data();



candidateTable.innerHTML += `


<tr>

<td>${data.name || ""}</td>

<td>${data.mobile || ""}</td>

<td>${data.email || ""}</td>

<td>${data.qualification || ""}</td>

<td>${data.preferredJob || ""}</td>


<td>

<button class="deleteBtn"

onclick="deleteCandidate('${document.id}')">

Delete

</button>

</td>


</tr>


`;


});


}




window.deleteCandidate = async(id)=>{


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


const snapshot =
await getDocs(
collection(db,"employers")
);



snapshot.forEach((document)=>{


const data =
document.data();



employerTable.innerHTML += `


<tr>


<td>${data.companyName || ""}</td>

<td>${data.contactPerson || ""}</td>

<td>${data.mobile || ""}</td>

<td>${data.email || ""}</td>


<td>


<button class="deleteBtn"

onclick="deleteEmployer('${document.id}')">

Delete

</button>


</td>


</tr>


`;


});


}




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
// Add Vacancy
// ===========================


const vacancyForm =
document.getElementById("vacancyForm");


const vacancyMessage =
document.getElementById("vacancyMessage");




if(vacancyForm){


vacancyForm.addEventListener("submit", async(e)=>{


e.preventDefault();



await addDoc(

collection(db,"vacancies"),

{


title:
document.getElementById("jobTitle").value,


location:
document.getElementById("jobLocation").value,


salary:
document.getElementById("jobSalary").value,


qualification:
document.getElementById("jobQualification").value,


status:
"Active",


createdAt:
new Date()


}

);




vacancyMessage.innerText =
"Vacancy Added Successfully";


vacancyMessage.style.color =
"green";



vacancyForm.reset();



loadVacancies();

loadDashboard();



});


}






// ===========================
// Load Vacancies
// ===========================


async function loadVacancies(){


if(!vacancyTable)
return;


vacancyTable.innerHTML="";



const snapshot =
await getDocs(
collection(db,"vacancies")
);




snapshot.forEach((document)=>{


const data =
document.data();



vacancyTable.innerHTML += `



<tr>


<td>${data.title || ""}</td>


<td>${data.location || ""}</td>


<td>${data.salary || ""}</td>


<td>${data.status || ""}</td>


<td>


<button class="deleteBtn"

onclick="deleteVacancy('${document.id}')">

Delete

</button>


</td>


</tr>


`;


});


}






window.deleteVacancy = async(id)=>{


if(!confirm("Delete Vacancy ?"))
return;


await deleteDoc(

doc(db,"vacancies",id)

);



loadVacancies();

loadDashboard();


};








// ===========================
// Dashboard Count
// ===========================


async function loadDashboard(){



const candidateSnapshot =
await getDocs(
collection(db,"candidates")
);



const employerSnapshot =
await getDocs(
collection(db,"employers")
);



const vacancySnapshot =
await getDocs(
collection(db,"vacancies")
);



document.getElementById("candidateCount").innerText =
candidateSnapshot.size;



document.getElementById("employerCount").innerText =
employerSnapshot.size;



document.getElementById("vacancyCount").innerText =
vacancySnapshot.size;



}








// ===========================
// Search Candidate
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
?
""
:
"none";



});


});


}






// ===========================
// Start
// ===========================


loadCandidates();

loadEmployers();

loadVacancies();

loadDashboard();


console.log("Admin Dashboard Ready");
// ===============================
// Add Vacancy
// Rudra Consultancy
// ===============================

import {
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const vacancyForm = document.getElementById("vacancyForm");


if(vacancyForm){


vacancyForm.addEventListener("submit", async(e)=>{


e.preventDefault();



const vacancyData = {


jobTitle:
document.getElementById("jobTitle").value,


location:
document.getElementById("jobLocation").value,


salary:
document.getElementById("jobSalary").value,


qualification:
document.getElementById("jobQualification").value,


status:"Active",


createdAt:
new Date()


};



await addDoc(

collection(db,"vacancies"),

vacancyData

);



document.getElementById("vacancyMessage").innerText =
"Vacancy Added Successfully";


vacancyForm.reset();


loadDashboard();


});


}
// ===============================
// Add New Vacancy
// ===============================

import {
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const vacancyForm = document.getElementById("vacancyForm");


if(vacancyForm){

vacancyForm.addEventListener("submit", async(e)=>{

e.preventDefault();


const vacancy = {

jobTitle:
document.getElementById("jobTitle").value,

location:
document.getElementById("jobLocation").value,

salary:
document.getElementById("jobSalary").value,

qualification:
document.getElementById("jobQualification").value,

status:"Active",

createdAt:new Date()

};


await addDoc(
collection(db,"vacancies"),
vacancy
);


document.getElementById("vacancyMessage").innerText =
"Vacancy Added Successfully";


vacancyForm.reset();


loadDashboard();


});

}
// ===============================
// Admin Logout
// ===============================

import {
signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
auth
} from "./firebase-config.js";


const logoutBtn = document.getElementById("logoutBtn");


if(logoutBtn){

logoutBtn.addEventListener("click", async()=>{

await signOut(auth);

window.location.href="login.html";

});

}
