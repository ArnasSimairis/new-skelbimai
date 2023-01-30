import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, update, ref, get, child, remove, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const db = getDatabase(app);
const dbref = ref(db)

function getuseruid() {
    let user = auth.currentUser
    console.log(user);
    return user.uid
}

async function getuserrole() {
    const userrole = await get(child(dbref, "users/" + getuseruid()))
        .then((snapshot) => {
            return snapshot.val().role
        }).catch((error) => {
            alert(error)
        })
    return userrole
}

export{getuserrole}