
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, update, ref, get, child, remove, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();



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
            // console.log('new user created!');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });

};
document.getElementById('register').addEventListener('click', registerNewUser);

const loginUser = () => {
    const login_email = document.getElementById('email').value;
    const login_password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, login_email, login_password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log('loged in!');

        const loginTime = new Date()
        update(ref(database, 'users/', + user.uid), {
            time_stamp: `${loginTime}`
        })
        // ...

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    }); 
}
document.getElementById('login').addEventListener('click', loginUser)

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
    if(user){
        const uid = user.uid;
        //log in
        document.getElementById('block2').style.display = 'block'
        document.getElementById('main').style.display = 'none'
        //===========================================
    }
    else{
        //log out
        document.getElementById('block2').style.display = 'none'
        document.getElementById('main').style.display = 'block'
        //===========================================
    }
})

document.getElementById('logout').addEventListener('click', () => {
    signOut(auth).then(() => {
        // alert('sign-out')
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    })
})

//===========================================
const form = () =>{
    const main = document.getElementById('main')
    //===========================================
    const form = document.createElement('div')
    form.setAttribute('id','block1')
    form.classList('row d-flex justify-content-center')
    //===========================================
    const form_in = document.createElement('div')
    form.setAttribute('id','block_register_login')
    form.classList('col-sm-12 col-md-3')
    //===========================================
    const email_div = document.createElement('div')
    email_div.classList('mb-3')
    form_in.appendChil(email_div)
    //===========================================
    const email_input = document.createElement('input')
    email_input.setAttribute('type','text')
    email_input.setAttribute('id','email')
    email_input.setAttribute('placeholder','email')
    email_input.classList('form-control')
    email_div.appendChild(email_input)
    //===========================================
    const password_div = document.createElement('div')
    password_div.classList('mb-3')
    form_in.appendChild(password_div)
    //===========================================
    const password_input = document.createElement('input')
    password_input.setAttribute('type','text')
    password_input.setAttribute('id','login')
    password_input.setAttribute('placeholder','password')
    password_input.classList('form-control')
    password_div.appendChild(password_input)
    form.appendChild(form_in)
    //===========================================

    //===========================================

}
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
document.getElementById('change').addEventListener('click', change_form)
//===========================================