// Rudra Consultancy Admin Panel Firebase Connection
// Owner: Sakshi


import { db } from "./firebase-config.js";


import {

collection,
getDocs

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





// Load Candidates Count


async function loadCandidates(){


try{


const snapshot = await getDocs(

collection(db,"candidates")

);



document.getElementById("candidateCount").innerText =
snapshot.size;



}

catch(error){

console.log(error);

}


}






// Load Employers Count


async function loadEmployers(){


try{


const snapshot = await getDocs(

collection(db,"employers")

);



document.getElementById("employerCount").innerText =
snapshot.size;



}

catch(error){

console.log(error);

}


}








// Load Vacancies Count


async function loadVacancies(){


try{


const snapshot = await getDocs(

collection(db,"vacancies")

);



document.getElementById("vacancyCount").innerText =
snapshot.size;



}

catch(error){

console.log(error);

}


}








// Start Dashboard


loadCandidates();

loadEmployers();

loadVacancies();







// Admin Information


console.log(

"Rudra Consultancy Admin Panel\n\n" +

"Owner: Sakshi\n" +

"Mobile: 6398030135\n" +

"Email: rudraconsultancy.office@gmail.com"

);
