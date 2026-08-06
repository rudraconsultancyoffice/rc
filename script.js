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
