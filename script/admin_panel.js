import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, update, ref, get, child, remove, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { firebaseConfig } from "./firebase.js";
import { block2, nav_bar, nav_li3 } from "./skelbimai_form.js";


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
admin_container.classList = "container"

const Users_block = document.createElement('div')
Users_block.classList = 'container w-50'




onAuthStateChanged(auth, (user) => {
    if (user) {
        get(child(dbref, "users/" + user.uid))
            .then((snapshot) => {
                const user_role = snapshot.val().user_role
                if (user_role === "admin_role") {
                    console.log("hi")
                    nav_li3.appendChild(nav_button3)
                    const go_to_admin_panel = () => {
                        var currentChild = skelb.lastElementChild;
                        while (currentChild) {
                            skelb.removeChild(currentChild)
                            currentChild = skelb.lastElementChild
                        }
                        skelb.appendChild(block2)
                        skelb.appendChild(nav_bar)
                        skelb.appendChild(admin_container)
                    }
                    nav_button3.addEventListener('click', go_to_admin_panel)
                }
            })
            .catch((error) => {
                alert(error)
            })

            get(child(dbref, "users/"))
            .then((snapshot) => {
                console.log(snapshot.val())
                var Users = []

                snapshot.forEach(childsnapshot => {
                    Users.push(childsnapshot.val())
                });
                console.log(Users);
                Users.map(users => {
                    const one_user = document.createElement('div')
                    one_user.classList = 'container d-flex mt-4'

                    const userEmail = document.createElement('h2')
                    userEmail.innerText = users.user_email
                    one_user.appendChild(userEmail)


                    const remove_user = document.createElement('button')
                    remove_user.innerText = 'Remove User'
                    remove_user.classList = 'btn btn-danger'
                    one_user.appendChild(remove_user)

                    function Delete_User () {
    
                    }
                    remove_user.addEventListener('click', Delete_User)

                    Users_block.appendChild(one_user)
                    admin_container.appendChild(Users_block)
                })
            })        




    }

})




export { admin_container }
export { nav_button3 }

