
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
        var Products = []

        snapshot.forEach(childSnapshot => {
            Products.push(childSnapshot.val())
        });
        Products.map(product => {
            const one_product_info_all = document.createElement('div')
            one_product_info_all.classList = "container d-flex mt-4 "

            const one_product_info = document.createElement('div')
            one_product_info.classList = "container d-flex flex-wrap flex-column align-content-between"

            const one_product_foto = document.createElement('img')
            one_product_foto.src = product.Foto
            one_product_foto.classList = 'my_img rounded'
            one_product_info_all.appendChild(one_product_foto)

            const add_to_cart_button = document.createElement('button')
            add_to_cart_button.innerText = 'Add to cart'

            

            function add_to_cart () {
                const cart = (() => {
                    const fieldValue = localStorage.getItem('cart')
                    return fieldValue === null
                        ? []
                        : JSON.parse(fieldValue)                    
                })
                cart.push({
                    "ID": product.ID
                })
                localStorage.setItem('cart', JSON.stringify(cart))
            }
            add_to_cart_button.addEventListener('click', add_to_cart)


            const one_product_name = document.createElement('h2')
            one_product_name.innerText = product.Name
            one_product_name.classList = "my_Name"
            one_product_info.appendChild(one_product_name)

            const one_product_description = document.createElement('span')
            one_product_description.innerText = product.Description
            one_product_description.classList = "my_Description"
            one_product_info.appendChild(one_product_description)

            const one_product_cost_quantity = document.createElement('div')
            one_product_cost_quantity.classList = 'container justify-content-between d-flex'

            const one_product_cost = document.createElement('h4')
            one_product_cost.innerText = "Cost: " + product.Cost
            
            const one_product_quantity = document.createElement('h4')
            one_product_quantity.innerText = "Quantity: " + product.Quantity

            one_product_cost_quantity.appendChild(one_product_cost)
            one_product_cost_quantity.appendChild(one_product_quantity)
            one_product_info.appendChild(one_product_cost_quantity)




            one_product_info_all.appendChild(one_product_info)
            every_skelb.appendChild(one_product_info_all)
        })
    })
//===========================================
export { every_skelb }