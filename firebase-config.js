// Rudra Consultancy Firebase Configuration
// Owner: Sakshi


import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import { getStorage } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

import { getAuth } from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// Firebase Configuration

const firebaseConfig = {

    apiKey: "AIzaSyAnG7ztQmUOwGZH7ju6pbRs87TYTttJets",

    authDomain: "rudra-consultancy-a5546.firebaseapp.com",

    projectId: "rudra-consultancy-a5546",

    storageBucket: "rudra-consultancy-a5546.firebasestorage.app",

    messagingSenderId: "33421654879",

    appId: "1:33421654879:web:f88137b58f64cd2713d4ea",

    measurementId: "G-2EDVJV1BHE"

};




// Initialize Firebase

const app = initializeApp(firebaseConfig);



const db = getFirestore(app);


const storage = getStorage(app);


const auth = getAuth(app);




// Export Firebase Services

export {

    app,

    db,

    storage,

    auth

};



console.log("Rudra Consultancy Firebase Connected");
