import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, update, ref, get, child, remove, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { firebaseConfig } from "./firebase.js";
import { getuserrole } from "./Role.js";


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const db = getDatabase(app);
const dbref = ref(db)

const nav_button3 = document.createElement('button')
nav_button3.classList = 'btn btn-sm btn-outline-secondary'
nav_button3.innerText = 'Admin Panel'

//===========================================
const admin_container = document.createElement('div')
//===========================================

getuserrole()
    .then(data => {
        if (data == 'simple_user') {
            console.log("log");
        }
        else {
            console.log("no");
        }
    })
export { admin_container }
export { nav_button3 }
