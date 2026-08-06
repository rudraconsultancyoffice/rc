// Rudra Consultancy Admin Panel Script
// Owner: Sakshi



// Dashboard Counter Demo Data

let candidates = 0;
let employers = 0;
let vacancies = 0;



document.getElementById("candidateCount").innerText = candidates;

document.getElementById("employerCount").innerText = employers;

document.getElementById("vacancyCount").innerText = vacancies;





// Add Vacancy Form


const vacancyForm = document.querySelector("#vacancies form");


if(vacancyForm){


vacancyForm.addEventListener("submit",function(e){


    e.preventDefault();


    vacancies++;


    document.getElementById("vacancyCount").innerText = vacancies;


    alert(
        "New vacancy added successfully."
    );


    this.reset();


});


}






// View Buttons


const viewButtons = document.querySelectorAll("button");


viewButtons.forEach(button=>{


    if(button.innerText === "View"){


        button.addEventListener("click",function(){


            alert(
            "Details will be connected with database after backend integration."
            );


        });


    }


});







// Admin Information


console.log(

"Rudra Consultancy Admin Panel\n\n" +

"Owner: Sakshi\n" +

"Mobile: 6398030135\n" +

"Email: rudraconsultancy.office@gmail.com"

);
