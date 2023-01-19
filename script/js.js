
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, update, ref, get, child, remove, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
//===========================================
import {log_reg} from './login_register_form.js'
import {skelb} from './skelbimai_simple.js'
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        //log in
        document.body.appendChild(skelb)
        //===========================================
    }
    else {
        //log out
        document.body.appendChild(log_reg)
        //===========================================
    }
})
//===========================================
const registerNewUser = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            const signintime = new Date()
            set(ref(database, 'users/' + user.uid), {
                user_email: email,
                user_passwd: password,
                user_role: "simple_role",
                time_stamp: `${signintime}`
            });
            console.log('new user created!');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });

};
import {button_reg} from './login_register_form.js'
button_reg.addEventListener('click', registerNewUser);
//===========================================

const loginUser = () => {
    const login_email = document.getElementById('email').value;
    const login_password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, login_email, login_password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('loged in!');

            const loginTime = new Date()
            update(ref(database, 'users/' + user.uid), {
                last_login: `${loginTime}`
            })
            // ...

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}
import {button_login} from './login_register_form.js'
button_login.addEventListener('click', loginUser)
//===========================================


//===========================================
import {logout} from './skelbimai_simple.js'
logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        alert('sign-out')
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    })
})
//===========================================

const change_form = () => {
    const register_form = document.getElementById('register');
    const register_form_display = window.getComputedStyle(register_form).display;
    if (register_form_display == 'block') {
        document.getElementById('register').style.display = 'none'
        document.getElementById('login').style.display = 'block'
    } else {
        document.getElementById('register').style.display = 'block'
        document.getElementById('login').style.display = 'none'
    }
}
import {change_button} from './login_register_form.js'
change_button.addEventListener('click', change_form)
//===========================================