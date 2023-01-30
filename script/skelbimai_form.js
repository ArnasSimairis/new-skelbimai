//===========================================
const skelb = document.createElement('div')
skelb.setAttribute('id', 'skelb')
//===========================================





//===========================================
const block2 = document.createElement('div')
block2.setAttribute('id', 'block2')
//===========================================
const logout = document.createElement('button')
logout.setAttribute('id', 'logout')
logout.innerText = 'Logout'
block2.appendChild(logout)
//===========================================





//===========================================
const nav_bar = document.createElement('nav')
nav_bar.classList = 'navbar navbar-expand-lg bg-light'
//===========================================
const nav_bar_div = document.createElement('div')
nav_bar_div.classList = 'container-fluid'
//===========================================
const nav_name = document.createElement('span')
nav_name.classList = 'navbar-brand mb-0 h1'
nav_name.innerText = 'Skelbimai'

nav_bar_div.appendChild(nav_name)
//===========================================
const nav_bar_div_in = document.createElement('div')
nav_bar_div_in.classList = 'collapse navbar-collapse'
nav_bar_div_in.setAttribute('id', 'navbarSupportedContent')
//===========================================
const nav_ul = document.createElement('ul')
nav_ul.classList = 'navbar-nav me-auto mb-2 mb-lg-0'
//===========================================
const nav_li1 = document.createElement('li')
nav_li1.classList = 'nav-item'
//===========================================
const nav_button1 = document.createElement('button')
nav_button1.classList = 'btn btn-sm btn-outline-secondary'
nav_button1.innerText = 'Skelbimai'

nav_li1.appendChild(nav_button1)
nav_ul.appendChild(nav_li1)
nav_bar_div_in.appendChild(nav_ul)
//===========================================
const nav_li2 = document.createElement('li')
nav_li2.classList = 'nav-item'
//===========================================
const nav_button2 = document.createElement('button')
nav_button2.classList = 'btn btn-sm btn-outline-secondary'
nav_button2.innerText = 'Sukurti skelbima'

nav_li2.appendChild(nav_button2)
nav_ul.appendChild(nav_li2)
nav_bar_div_in.appendChild(nav_ul)
// ===========================================
const nav_li3 = document.createElement('li')
nav_li3.classList = 'nav-item'
//===========================================
import { nav_button3 } from "./admin_panel.js";

nav_li3.appendChild(nav_button3)
nav_ul.appendChild(nav_li3)
nav_bar_div_in.appendChild(nav_ul)



//===========================================
nav_bar_div.appendChild(nav_bar_div_in)
nav_bar.appendChild(nav_bar_div)
//===========================================





//===========================================
const container_skel = document.createElement('div')
container_skel.setAttribute('id', 'container')
//===========================================
const cont_row = document.createElement('div')
cont_row.classList = 'row'
//===========================================
const cont_row_in = document.createElement('div')
cont_row_in.classList = 'col-sm-12 col-md-6'
//===========================================
const form_skelb = document.createElement('form')
form_skelb.classList = 'px-3'
//===========================================
// const form_skelb_div1 = document.createElement('div')
// form_skelb_div1.classList = 'mb-3'

// const lable_id = document.createElement('lable')
// lable_id.classList = 'form-lable text-secondary'
// lable_id.innerText = 'Product Code'
// form_skelb_div1.appendChild(lable_id)

// const enterID = document.createElement('input')
// enterID.setAttribute('type', 'number')
// enterID.classList = 'form-control'
// enterID.setAttribute('placeholder', 'only number...')
// form_skelb_div1.appendChild(enterID)
// form_skelb.appendChild(form_skelb_div1)
// //===========================================
const form_skelb_div2 = document.createElement('div')
form_skelb_div2.classList = 'mb-3'

const lable_Name = document.createElement('lable')
lable_Name.classList = 'form-lable text-secondary'
lable_Name.innerText = 'Product Name'
form_skelb_div2.appendChild(lable_Name)

const enterName = document.createElement('input')
enterName.setAttribute('type', 'text')
enterName.classList = 'form-control'
form_skelb_div2.appendChild(enterName)
form_skelb.appendChild(form_skelb_div2)
//===========================================
const form_skelb_div3 = document.createElement('div')
form_skelb_div3.classList = 'mb-3'

const lable_Quantity = document.createElement('lable')
lable_Quantity.classList = 'form-lable text-secondary'
lable_Quantity.innerText = 'Product Quantity'
form_skelb_div3.appendChild(lable_Quantity)

const enterQuantity = document.createElement('input')
enterQuantity.setAttribute('type', 'text')
enterQuantity.classList = 'form-control'
form_skelb_div3.appendChild(enterQuantity)
form_skelb.appendChild(form_skelb_div3)
//===========================================
const form_skelb_div4 = document.createElement('div')
form_skelb_div4.classList = 'mb-3'

const lable_Cost = document.createElement('lable')
lable_Cost.classList = 'form-lable text-secondary'
lable_Cost.innerText = 'Product Cost'
form_skelb_div4.appendChild(lable_Cost)

const enterCost = document.createElement('input')
enterCost.setAttribute('type', 'text')
enterCost.classList = 'form-control'
form_skelb_div4.appendChild(enterCost)
form_skelb.appendChild(form_skelb_div4)
//===========================================
const form_skelb_div5 = document.createElement('div')
form_skelb_div5.classList = 'mb-3'

const lable_Description = document.createElement('lable')
lable_Description.classList = 'form-lable text-secondary'
lable_Description.innerText = 'Product Description'
form_skelb_div5.appendChild(lable_Description)

const enterDescription = document.createElement('input')
enterDescription.setAttribute('type', 'text')
enterDescription.classList = 'form-control'
form_skelb_div5.appendChild(enterDescription)
form_skelb.appendChild(form_skelb_div5)
//===========================================
const form_skelb_div6 = document.createElement('div')
form_skelb_div6.classList = 'mb-3'

const lable_Foto = document.createElement('lable')
lable_Foto.classList = 'form-lable text-secondary'
lable_Foto.innerText = 'Product Foto'
form_skelb_div6.appendChild(lable_Foto)

const enterFoto = document.createElement('input')
enterFoto.setAttribute('type', 'text')
enterFoto.classList = 'form-control'
form_skelb_div6.appendChild(enterFoto)
form_skelb.appendChild(form_skelb_div6)
//===========================================
cont_row_in.appendChild(form_skelb)
cont_row.appendChild(cont_row_in)
container_skel.appendChild(cont_row)
//===========================================
const insert_buttons = document.createElement('div')
insert_buttons.classList = "mb-3 ms-5 d-flex justify-content-around align-items-center"

const insertbtn = document.createElement('button')
insertbtn.setAttribute('type', 'submit')
insertbtn.classList = 'btn btn-secondary'
insertbtn.setAttribute('id', 'insert')
insertbtn.innerText = 'insert'
insert_buttons.appendChild(insertbtn)

// const updatebtn = document.createElement('button')
// updatebtn.setAttribute('type', 'submit')
// updatebtn.classList = 'btn btn-secondary'
// updatebtn.setAttribute('id', 'update')
// updatebtn.innerText = 'update'
// insert_buttons.appendChild(updatebtn)

// const del = document.createElement('button')
// del.setAttribute('type', 'submit')
// del.classList = 'btn btn-secondary'
// del.setAttribute('id', 'remove')
// del.innerText = 'remove'
// insert_buttons.appendChild(del)

form_skelb.appendChild(insert_buttons)
//===========================================











//===========================================

export { skelb }
export { logout }
// export { del }
// export { updatebtn }
export { insertbtn }
export { enterName }
export { enterQuantity }
export { enterCost }
export { enterDescription }
export { enterFoto }
export { nav_bar }
export { block2 }
export { container_skel }
export { nav_li3 }
export { nav_button1 }
export { nav_button2 }
export { nav_button3 }


