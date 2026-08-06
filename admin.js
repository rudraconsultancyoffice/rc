// admin.js

import { auth, db } from "./firebase-config.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    collection,
    getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// --------------------
// Login Protection
// --------------------

onAuthStateChanged(auth, async (user) => {

    if (!user) {

        window.location.href = "login.html";
        return;

    }

    loadCandidates();
    loadEmployers();
    loadVacancies();

});



// --------------------
// Logout
// --------------------

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", async () => {

        await signOut(auth);

        window.location.href = "login.html";

    });

}



// --------------------
// Candidates
// --------------------

async function loadCandidates() {

    const tbody = document.getElementById("candidateTable");

    if (!tbody) return;

    tbody.innerHTML = "";

    const snapshot = await getDocs(collection(db, "candidates"));

    document.getElementById("candidateCount").innerText =
        snapshot.size;

    snapshot.forEach((doc) => {

        const data = doc.data();

        tbody.innerHTML += `

<tr>

<td>${data.name || ""}</td>

<td>${data.mobile || ""}</td>

<td>${data.email || ""}</td>

<td>${data.qualification || ""}</td>

<td>${data.experience || ""}</td>

</tr>

`;

    });

}



// --------------------
// Employers
// --------------------

async function loadEmployers() {

    const tbody = document.getElementById("employerTable");

    if (!tbody) return;

    tbody.innerHTML = "";

    const snapshot = await getDocs(collection(db, "employers"));

    document.getElementById("employerCount").innerText =
        snapshot.size;

    snapshot.forEach((doc) => {

        const data = doc.data();

        tbody.innerHTML += `

<tr>

<td>${data.companyName || ""}</td>

<td>${data.contactPerson || ""}</td>

<td>${data.mobile || ""}</td>

<td>${data.email || ""}</td>

</tr>

`;

    });

}



// --------------------
// Vacancies
// --------------------

async function loadVacancies() {

    const tbody = document.getElementById("vacancyTable");

    if (!tbody) return;

    tbody.innerHTML = "";

    const snapshot = await getDocs(collection(db, "vacancies"));

    document.getElementById("vacancyCount").innerText =
        snapshot.size;

    snapshot.forEach((doc) => {

        const data = doc.data();

        tbody.innerHTML += `

<tr>

<td>${data.jobTitle || ""}</td>

<td>${data.location || ""}</td>

<td>${data.salary || ""}</td>

<td>${data.status || "Open"}</td>

</tr>

`;

    });

}

console.log("Rudra Consultancy Admin Dashboard Ready");
