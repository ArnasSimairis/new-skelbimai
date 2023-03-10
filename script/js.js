
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, update, ref, get, child, remove, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();
const db = getDatabase(app);
const dbref = ref(db)
//===========================================
import { log_reg } from './login_register_form.js'
import { skelb } from './skelbimai_form.js'
import { container_skel } from './skelbimai_form.js'
import { admin_container } from './admin_panel.js'
import { every_skelb } from './skelbimai_show.js'
import { block2 } from './skelbimai_form.js'
import { nav_bar } from './skelbimai_form.js'
import { nav_button3 } from './admin_panel.js'
import { nav_button2 } from './skelbimai_form.js'
import { nav_button1 } from './skelbimai_form.js'
import { nav_li3 } from './skelbimai_form.js'
const user = auth.currentUser;


onAuthStateChanged(auth, (user) => {

    if (user) {

        console.log(user);
        const uid = user.uid;
        //log in

        var child = document.body.lastElementChild;
        while (child) {
            document.body.removeChild(child);
            child = document.body.lastElementChild;
        }
        document.body.appendChild(skelb)
        skelb.appendChild(block2)
        skelb.appendChild(nav_bar)
        skelb.appendChild(every_skelb)

        const go_to_all_skelb = () => {
            var currentChild = skelb.lastElementChild;
            while (currentChild) {
                skelb.removeChild(currentChild)
                currentChild = skelb.lastElementChild
            }
            skelb.appendChild(block2)
            skelb.appendChild(nav_bar)
            skelb.appendChild(every_skelb)
        }
        nav_button1.addEventListener('click', go_to_all_skelb)



        const go_to_create_skelb = () => {
            var currentChild = skelb.lastElementChild;
            while (currentChild) {
                skelb.removeChild(currentChild)
                currentChild = skelb.lastElementChild
            }
            skelb.appendChild(block2)
            skelb.appendChild(nav_bar)
            skelb.appendChild(container_skel)
        }
        nav_button2.addEventListener('click', go_to_create_skelb)


        //===========================================
    }
    else {
        //log out
        var child = document.body.lastElementChild;
        while (child) {
            document.body.removeChild(child);
            child = document.body.lastElementChild;
        }
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
import { button_reg } from './login_register_form.js'
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
import { button_login } from './login_register_form.js'
button_login.addEventListener('click', loginUser)
//===========================================


//===========================================
import { logout } from './skelbimai_form.js'
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
import { change_button } from './login_register_form.js'
change_button.addEventListener('click', change_form)
//===========================================
