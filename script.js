// Rudra Consultancy Website Script
// Owner: Sakshi


// WhatsApp Number

const whatsappNumber = "916398030135";



// Job Apply Buttons

const applyButtons = document.querySelectorAll(".apply-btn");


applyButtons.forEach(button => {


    button.addEventListener("click", function(){


        const jobName =
        this.parentElement.querySelector("h3").innerText;


        const message =
        "Hello Rudra Consultancy,\n\n" +
        "I want to apply for " +
        jobName +
        " vacancy.\n\n" +
        "Please share more details.";


        window.open(

            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message),

            "_blank"

        );


    });


});




// Candidate Form


const candidateForm =
document.getElementById("candidateForm");


if(candidateForm){


candidateForm.addEventListener("submit",function(e){


    e.preventDefault();


    alert(
    "Thank you for registering with Rudra Consultancy.\n\n" +
    "Our team will contact you soon.\n\n" +
    "Owner: Sakshi\n" +
    "Mobile: 6398030135"
    );


    this.reset();


});


}






// Employer Form


const employerForm =
document.getElementById("employerForm");


if(employerForm){


employerForm.addEventListener("submit",function(e){


    e.preventDefault();


    alert(
    "Thank you for registering your company with Rudra Consultancy.\n\n" +
    "Our recruitment team will contact you soon."
    );


    this.reset();


});


}







// Smooth Scrolling


document.querySelectorAll('a[href^="#"]')
.forEach(link => {


    link.addEventListener("click",function(e){


        const target =
        document.querySelector(
        this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});







// Website Information Console


console.log(

"Rudra Consultancy\n\n" +

"Owner: Sakshi\n" +

"Mobile: 6398030135\n" +

"WhatsApp: 6398030135\n" +

"Email: rudraconsultancy.office@gmail.com\n" +

"Address: Kashipur, Uttarakhand, Udham Singh Nagar"

);
