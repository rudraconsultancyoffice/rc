// ==========================================
// Rudra Consultancy
// script.js FINAL
// ==========================================


// ===============================
// Smooth Scroll Navigation
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});



// ===============================
// Firebase Imports
// ===============================

import { db } from "./firebase-config.js";

import {

collection,
getDocs,
addDoc

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// ===============================
// Load Vacancies
// ===============================

const jobContainer =
document.getElementById("jobContainer");


async function loadVacancies(){


if(!jobContainer) return;


try{


const snapshot =
await getDocs(
collection(db,"vacancies")
);



if(snapshot.empty){

return;

}



jobContainer.innerHTML="";



snapshot.forEach(doc=>{


const data = doc.data();



jobContainer.innerHTML += `

<div class="job-box">

<h3>
${data.jobTitle || "Job Vacancy"}
</h3>


<p>

<b>Location:</b>
${data.location || "Kashipur"}

<br>

<b>Qualification:</b>
${data.qualification || ""}

<br>

<b>Salary:</b>
${data.salary || ""}

</p>



<button class="apply-btn">

Apply Now

</button>


</div>

`;

});


applyButtonAction();


}

catch(error){

console.log(
"Vacancy Loading Error:",
error
);

}


}



loadVacancies();




// ===============================
// Apply Button Action
// ===============================

function applyButtonAction(){


document
.querySelectorAll(".apply-btn")
.forEach(button=>{


button.onclick = ()=>{


const candidate =
document.getElementById("candidate");


if(candidate){

candidate.scrollIntoView({

behavior:"smooth"

});

}


};


});


}




applyButtonAction();





// ===============================
// Candidate Registration
// ===============================


const candidateForm =
document.getElementById("candidateForm");



if(candidateForm){


candidateForm.addEventListener(
"submit",
(e)=>{


e.preventDefault();


alert(
"Thank you for registering with Rudra Consultancy."
);



candidateForm.reset();



});


}






// ===============================
// Employer Registration Save
// ===============================


const employerForm =
document.getElementById("employerForm");



if(employerForm){


employerForm.addEventListener(
"submit",
async(e)=>{


e.preventDefault();



const employerData = {


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


vacancy:
document.getElementById("vacancyName").value,


salary:
document.getElementById("salary").value,


vacancyCount:
document.getElementById("vacancyCount").value,


description:
document.getElementById("jobDescription").value,


createdAt:
new Date()


};



try{


await addDoc(

collection(db,"employers"),

employerData

);



alert(
"Company Registration Successful"
);



employerForm.reset();



}

catch(error){


console.log(error);


alert(
"Something went wrong. Please try again."
);


}



});


}






// ===============================
// Footer Year
// ===============================


const footer =
document.querySelector("footer p");



if(footer){


footer.innerHTML =
`© ${new Date().getFullYear()} Rudra Consultancy. All Rights Reserved.`;

}



console.log(
"Rudra Consultancy Website Loaded"
);
