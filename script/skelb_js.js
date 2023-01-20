
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { firebaseConfig } from "./firebase.js";
const app = initializeApp(firebaseConfig);

import { getDatabase, ref, get, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const db = getDatabase();

let enterID = document.getElementById("enterID")
let enterName = document.getElementById("enterName")
let enterQuantity = document.getElementById("enterQuantity")
let findID = document.getElementById("findID")
let findData = document.getElementById("findData")
let enterKaina = document.getElementById("enterKaina")
let enterAprasyma = document.getElementById("enterAprasyma")
let enterFoto = document.getElementById("enterFoto")


let findBtn = document.getElementById("find")

function insertData(evt) {
    evt.preventDefault();
    if (enterID.value.length < 3) {
        alert('Product Code cant be blank! MIN 3 symbols')
        return
    }
    if (enterName.value === "") {
        alert('Product name cant be blank!')
        return
    }
    if (enterQuantity.value.length < 1) {
        alert('Product Quantity cant be blank! MTN 1 symbols')
        return
    }
    if (enterKaina.value.length < 1) {
        alert('Product kaina cant be blank! MTN 1 symbols')
        return
    }
    if (enterAprasyma.value === "") {
        alert('Product aprasymas cant be blank! MTN 1 symbols')
        return
    }
    if (enterFoto.value === "") {
        alert('Product Foto cant be blank! MTN 1 symbols')
        return
    }
    console.log(enterID.value, enterName.value, enterQuantity.value, enterKaina.value, enterAprasyma.value, enterFoto.value);
    set(ref(db, "Product/" + enterID.value), {
        Name: enterName.value,
        ID: enterID.value,
        Quantity: enterQuantity.value,
        Kaina: enterKaina.value,
        Aprasyma: enterAprasyma.value,
        Foto: enterFoto.value
    })
        .then(() => {
            alert("Data added successfully");
        })
        .catch((error) => {
            alert(error)
        })
}
import { insertbtn } from "./skelbimai_form.js";
insertbtn.addEventListener('click', insertData)


function FindData(evt) {
    evt.preventDefault();
    if (findID.value.length < 3) {
        alert('Product Code cant be blank! MIN 3 symbols')
        return
    }
    console.log(`select function ${findID.value}`);
    const dbref = ref(db);

    get(child(dbref, "Product/" + findID.value))
        .then((snapshot) => {
            console.log(snapshot.val().Name);
            if (snapshot.exists()) {
                // let listItem = document.createElement('li')
                // listItem.classList.add("list-group-item", "list-group-item-secondary")
                // listItem.textContent = "Product Name: " +snapshot.val().Name
                // findData.appendChild(listItem)
                // let listItemSecond = document.createElement('li')
                // listItemSecond.classlist.add("list-group-item", "list-group-item-light")
                // listItemSecond.textContent = "Product Quantity: " + snapshot.val().Quantity
                // findData.appendChild(listItemSecond)
                // let listItemThird = document.createElement('li')
                // listItemSecond.classlist.add("list-group-item", "list-group-item-light")
                // listItemThird.textContent = "Product Kaina: " + snapshot.val().Kaina
                // findData.appendChild(listItemThird)
                // let listItemFourth = document.createElement('li')
                // listItemSecond.classlist.add("list-group-item", "list-group-item-light")
                // listItemFourth.textContent = "Product Aprasymas: " + snapshot.val().Aprasyma
                // findData.appendChild(listItemFourth)
                // let listItemFive = document.createElement('img')
                // listItemSecond.classlist.add("list-group-item", "list-group-item-light")
                // listItemFive.src = snapshot.val().Foto
                // findData.appendChild(listItemFive)

                let first_tr = document.createElement('tr')
                let item_name = document.createElement('td')
                item_name.textContent = "Name"
                let item_quantity = document.createElement('td')
                item_quantity.textContent = "Quality"
                let item_kaina = document.createElement('td')
                item_kaina.textContent = "Kaina"
                let item_aprasymas = document.createElement('td')
                item_aprasymas.textContent = "Aprasymas"
                let item_foto = document.createElement('td')
                item_foto.textContent = "Foto"
                first_tr.appendChild(item_name)
                first_tr.appendChild(item_quantity)
                first_tr.appendChild(item_kaina)
                first_tr.appendChild(item_aprasymas)
                first_tr.appendChild(item_foto)
                findData.appendChild(first_tr)

                let second_tr = document.createElement('tr')
                let list_name = document.createElement('td')
                list_name.textContent =  snapshot.val().Name
                let list_quantity = document.createElement('td')
                list_quantity.textContent =  snapshot.val().Quantity
                let list_kaina = document.createElement('td')
                list_kaina.textContent =  snapshot.val().Kaina
                let list_aprasymas = document.createElement('td')
                list_aprasymas.textContent =  snapshot.val().Aprasyma
                let list_foto = document.createElement('img')
                list_foto.src =  snapshot.val().Foto
                list_foto.classList.add('hello')

                second_tr.appendChild(list_name)
                second_tr.appendChild(list_quantity)
                second_tr.appendChild(list_kaina)
                second_tr.appendChild(list_aprasymas)
                second_tr.appendChild(list_foto)
                findData.appendChild(second_tr)

            } else {
                alert("no data found")
            }
        })
        .catch((error) => {
            alert(error)
        })
}

// findBtn.addEventListener('click', FindData)

function UpdateData(evt) {
    evt.preventDefault();
    if (enterID.value.length < 3) {
        alert('Product Code cant be blank! MIN 3 symbols')
        return
    }
    if (enterName.value === "") {
        alert('Product name cant be blank!')
        return
    }
    if (enterQuantity.value.length < 1) {
        alert('Product Quantity cant be blank! MTN 1 symbols')
        return
    }
    if (enterKaina.value.length < 1) {
        alert('Product kaina cant be blank! MTN 1 symbols')
        return
    }
    if (enterAprasyma.value === "") {
        alert('Product aprasymas cant be blank! MTN 1 symbols')
        return
    }
    if (enterFoto.value === "") {
        alert('Product Foto cant be blank! MTN 1 symbols')
        return
    }
    console.log(`update function ${enterID.value}
                                ${enterName.value}
                                ${enterQuantity.value}
                                ${enterKaina.value}
                                ${enterAprasyma.value}
                                ${enterFoto.value}`);
    update(ref(db, "Product/" + enterID.value), {
        Name: enterName.value,
        Quantity: enterQuantity.value,
        Kaina: enterKaina.value,
        Aprasyma: enterAprasyma.value,
        Foto: enterFoto.value
    })
        .then(() => {
            alert("data updated successfully");
        })
        .catch((error) => {
            alert(error);
        })
    
}
import { updatebtn } from "./skelbimai_form.js";
updatebtn.addEventListener('click', UpdateData)


function RemoveData(evt) {
    evt.preventDefault();
    if (enterID.value.length < 3) {
        alert('Product Code cant be blank! MIN 3 symbols')
        return
    }
    console.log(`delete function ${enterID.value}`);
    remove(ref(db, "Product/" + enterID.value))
        .then(() => {
            alert("Data deleted successfully");
        })
        .catch((error) => {
            alert(error);
        })
    
}
import { del } from "./skelbimai_form.js";
del.addEventListener('click', RemoveData)