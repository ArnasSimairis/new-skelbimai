//===========================================
const skelb = document.createElement('div')
skelb.setAttribute('id', 'skelb')
//===========================================
const block2 = document.createElement('div')
block2.setAttribute('id', 'block2')
//===========================================
const logout = document.createElement('button')
logout.setAttribute('id', 'logout')
logout.innerText = 'Logout'
block2.appendChild(logout)
skelb.appendChild(block2)
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
const form_skelb_div1 = document.createElement('div')
form_skelb_div1.classList = 'mb-3'

const lable_id = document.createElement('lable')
lable_id.classList = 'form-lable text-secondary'
lable_id.innerText = 'Product Code'
form_skelb_div1.appendChild(lable_id)

const enterID = document.createElement('input')
enterID.setAttribute('type', 'number')
enterID.classList = 'form-control'
enterID.setAttribute('placeholder', 'only number...')
form_skelb_div1.appendChild(enterID)
form_skelb.appendChild(form_skelb_div1)
//===========================================
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
lable_Foto.innerText = 'Product Description'
form_skelb_div6.appendChild(lable_Foto)

const enterFoto = document.createElement('input')
enterFoto.setAttribute('type', 'text')
enterFoto.classList = 'form-control'
form_skelb_div6.appendChild(enterFoto)
form_skelb.appendChild(form_skelb_div6)
//===========================================
const insert_buttons = document.createElement('div')
insert_buttons.classList = "mb-3 ms-5 d-flex justify-content-around align-items-center"

const insertbtn = document.createElement('button')
insertbtn.setAttribute('type', 'submit')
insertbtn.classList = 'btn btn-secondary'
insertbtn.setAttribute('id', 'insert')
insertbtn.innerText = 'insert'
insert_buttons.appendChild(insertbtn)

const updatebtn = document.createElement('button')
updatebtn.setAttribute('type', 'submit')
updatebtn.classList = 'btn btn-secondary'
updatebtn.setAttribute('id', 'update')
updatebtn.innerText = 'update'
insert_buttons.appendChild(updatebtn)

const del = document.createElement('button')
del.setAttribute('type', 'submit')
del.classList = 'btn btn-secondary'
del.setAttribute('id', 'remove')
del.innerText = 'remove'
insert_buttons.appendChild(del)

form_skelb.appendChild(insert_buttons)
//===========================================

export{skelb}
export{logout}
export{del}
export{updatebtn}
export{insertbtn}