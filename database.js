// Rudra Consultancy Database File
// Owner: Sakshi


import { db } from "./firebase-config.js";


import {
    collection,
    addDoc,
    serverTimestamp
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





// Candidate Registration Save


const candidateForm = document.getElementById("candidateForm");


if(candidateForm){


candidateForm.addEventListener("submit", async function(e){


    e.preventDefault();


    const candidateData = {

        name: this[0].value,

        mobile: this[1].value,

        email: this[2].value,

        qualification: this[3].value,

        experience: this[4].value,

        preferredJob: this[5].value,

        address: this[6].value,

        status: "new",

        createdAt: serverTimestamp()

    };



    try{


        await addDoc(

            collection(db,"candidates"),

            candidateData

        );


        alert(
        "Candidate registration submitted successfully."
        );


        candidateForm.reset();


    }

    catch(error){


        console.log(error);


        alert(
        "Something went wrong. Please try again."
        );


    }



});


}








// Employer Registration Save



const employerForm = document.getElementById("employerForm");



if(employerForm){



employerForm.addEventListener("submit", async function(e){



    e.preventDefault();



    const employerData = {


        companyName: this[0].value,


        contactPerson: this[1].value,


        mobile: this[2].value,


        email: this[3].value,


        requirement: this[4].value,


        status:"new",


        createdAt:serverTimestamp()


    };





    try{


        await addDoc(

            collection(db,"employers"),

            employerData

        );



        alert(
        "Company registration submitted successfully."
        );


        employerForm.reset();



    }


    catch(error){


        console.log(error);


        alert(
        "Something went wrong."
        );


    }




});


}








// Add Vacancy Function


async function addVacancy(data){


    try{


        await addDoc(

            collection(db,"vacancies"),

            {


            ...data,


            status:"active",


            createdAt:serverTimestamp()


            }

        );



        console.log(
        "Vacancy Added Successfully"
        );


    }


    catch(error){


        console.log(error);


    }


}






export {
    addVacancy
};
