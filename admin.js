// ===================================
// Rudra Consultancy
// admin.js FINAL
// ===================================

import { db, auth } from "./firebase-config.js";

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ===============================
// Admin Login Check
// ===============================

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// ===============================
// Elements
// ===============================

const candidateTable = document.getElementById("candidateTable");
const employerTable = document.getElementById("employerTable");
const vacancyTable = document.getElementById("vacancyTable");

const vacancyForm = document.getElementById("vacancyForm");
const vacancyMessage = document.getElementById("vacancyMessage");

const logoutBtn = document.getElementById("logoutBtn");

const searchBox = document.getElementById("searchCandidate");

// ===============================
// Load Candidates
// ===============================

async function loadCandidates() {

  if (!candidateTable) return;

  candidateTable.innerHTML = "";

  const snapshot = await getDocs(
    collection(db, "candidates")
  );

  snapshot.forEach((documentData) => {

    const data = documentData.data();

    candidateTable.innerHTML += `

      <tr>

        <td>${data.name || ""}</td>

        <td>${data.mobile || ""}</td>

        <td>${data.email || ""}</td>

        <td>${data.qualification || ""}</td>

        <td>${data.preferredJob || ""}</td>

        <td>

          <button
            class="deleteBtn"
            onclick="deleteCandidate('${documentData.id}')">

            Delete

          </button>

        </td>

      </tr>

    `;

  });

}

window.deleteCandidate = async (id) => {

  if (!confirm("Delete Candidate ?")) return;

  await deleteDoc(
    doc(db, "candidates", id)
  );

  loadCandidates();
  loadDashboard();

};
// ===============================
// Load Employers
// ===============================

async function loadEmployers() {

  if (!employerTable) return;

  employerTable.innerHTML = "";

  const snapshot = await getDocs(
    collection(db, "employers")
  );

  snapshot.forEach((documentData) => {

    const data = documentData.data();

    employerTable.innerHTML += `

      <tr>

        <td>${data.companyName || ""}</td>

        <td>${data.contactPerson || ""}</td>

        <td>${data.mobile || ""}</td>

        <td>${data.email || ""}</td>

        <td>

          <button
            class="deleteBtn"
            onclick="deleteEmployer('${documentData.id}')">

            Delete

          </button>

        </td>

      </tr>

    `;

  });

}

window.deleteEmployer = async (id) => {

  if (!confirm("Delete Employer ?")) return;

  await deleteDoc(
    doc(db, "employers", id)
  );

  loadEmployers();
  loadDashboard();

};

// ===============================
// Load Vacancies
// ===============================

async function loadVacancies() {

  if (!vacancyTable) return;

  vacancyTable.innerHTML = "";

  const snapshot = await getDocs(
    collection(db, "vacancies")
  );

  snapshot.forEach((documentData) => {

    const data = documentData.data();

    vacancyTable.innerHTML += `

      <tr>

        <td>${data.jobTitle || ""}</td>

        <td>${data.location || ""}</td>

        <td>${data.salary || ""}</td>

        <td>${data.status || "Active"}</td>

        <td>

          <button
            class="deleteBtn"
            onclick="deleteVacancy('${documentData.id}')">

            Delete

          </button>

        </td>

      </tr>

    `;

  });

}

window.deleteVacancy = async (id) => {

  if (!confirm("Delete Vacancy ?")) return;

  await deleteDoc(
    doc(db, "vacancies", id)
  );

  loadVacancies();
  loadDashboard();

};
// ===============================
// Add Vacancy
// ===============================

if (vacancyForm) {

  vacancyForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const vacancy = {

      jobTitle: document.getElementById("jobTitle").value,

      location: document.getElementById("jobLocation").value,

      salary: document.getElementById("jobSalary").value,

      qualification: document.getElementById("jobQualification").value,

      status: "Active",

      createdAt: new Date()

    };

    await addDoc(
      collection(db, "vacancies"),
      vacancy
    );

    if (vacancyMessage) {

      vacancyMessage.innerText =
        "Vacancy Added Successfully";

      vacancyMessage.style.color = "green";

    }

    vacancyForm.reset();

    loadVacancies();
    loadDashboard();

  });

}

// ===============================
// Dashboard Count
// ===============================

async function loadDashboard() {

  const candidateSnapshot =
    await getDocs(collection(db, "candidates"));

  const employerSnapshot =
    await getDocs(collection(db, "employers"));

  const vacancySnapshot =
    await getDocs(collection(db, "vacancies"));

  const candidateCount =
    document.getElementById("candidateCount");

  const employerCount =
    document.getElementById("employerCount");

  const vacancyCount =
    document.getElementById("vacancyCount");

  if (candidateCount)
    candidateCount.innerText = candidateSnapshot.size;

  if (employerCount)
    employerCount.innerText = employerSnapshot.size;

  if (vacancyCount)
    vacancyCount.innerText = vacancySnapshot.size;

}

// ===============================
// Search Candidate
// ===============================

if (searchBox) {

  searchBox.addEventListener("keyup", () => {

    const value =
      searchBox.value.toLowerCase();

    const rows =
      document.querySelectorAll("#candidateTable tr");

    rows.forEach((row) => {

      const text =
        row.innerText.toLowerCase();

      row.style.display =
        text.includes(value) ? "" : "none";

    });

  });

}
// ===============================
// Admin Logout
// ===============================

if (logoutBtn) {

  logoutBtn.addEventListener("click", async () => {

    try {

      await signOut(auth);

      window.location.href = "login.html";

    } catch (error) {

      console.error("Logout Error:", error);

      alert("Logout failed!");

    }

  });

}

// ===============================
// Start
// ===============================

document.addEventListener("DOMContentLoaded", async () => {

  try {

    await loadCandidates();

    await loadEmployers();

    await loadVacancies();

    await loadDashboard();

    console.log("Admin Dashboard Ready");

  } catch (error) {

    console.error("Admin Dashboard Error:", error);

  }

});
