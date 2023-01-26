
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, set, update, ref, get, child, remove, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { firebaseConfig } from "./firebase.js";

const app = initializeApp(firebaseConfig)
const db = getDatabase(app);
//===========================================
const every_skelb = document.createElement('div')
every_skelb.classList
//===========================================
const dbref = ref(db);
    get(child(dbref, "Product/"))
        .then((snapshot) => {
            var Products =[]

            snapshot.forEach(childSnapshot => {
                Products.push(childSnapshot.val())
            });
            console.log(Products);
            Products.map(product => {
                const one_product_info_all = document.createElement('div')
                one_product_info.classList = "container"
                
                const one_product_info = document.createElement('div')
                one_product_info.classList = "container d-flex mt-4"

                const one_product_info_in = document.createElement('div')
                one_product_info.classList = "container d-flex mt-4"

                const one_product_foto = document.createElement('img')
                one_product_foto.src = product.Foto
                one_product_foto.classList = 'my_img'
                one_product_info.appendChild(one_product_foto)

                const one_product_name = document.createElement('h2')
                one_product_name.innerText = product.Name
                one_product_info_in.appendChild(one_product_name)

                const one_product_description = document.createElement('span')
                one_product_description.innerText = product.Description
                one_product_info_in.appendChild(one_product_description)

                const one_product_cost = document.createElement('h3')
                one_product_cost.innerText = product.Kaina
                one_product_info_in.appendChild(one_product_cost)



              one_product_info_all.appendChild(one_product_info)
              one_product_info_all.appendChild(one_product_info_in)
              every_skelb.appendChild(one_product_info_all)
            })
        })
//===========================================
export{every_skelb}