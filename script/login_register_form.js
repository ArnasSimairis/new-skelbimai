
//===========================================
const main = document.createElement('div')
main.setAttribute('id', 'main')
main.classList = 'container d-flex flex-column h-100 mt-5'
//===========================================
const block1 = document.createElement('div')
block1.setAttribute('id', 'block1')
block1.classList = 'row d-flex justify-content-center'
//===========================================
const form = document.createElement('form')
const form_in = document.createElement('div')
form_in.setAttribute('id', 'block_register_login')
form_in.classList = 'col-sm-12 col-md-3'
//===========================================
const email_input = document.createElement('input')
email_input.setAttribute('type', 'text')
email_input.setAttribute('id', 'email')
email_input.setAttribute('placeholder', 'email')
email_input.classList = 'form-control'
//===========================================
const email_div = document.createElement('div')
email_div.classList = 'mb-3'

email_div.appendChild(email_input)
form_in.appendChild(email_div)
//===========================================
const password_input = document.createElement('input')
password_input.setAttribute('type', 'password')
password_input.setAttribute('id', 'password')
password_input.setAttribute('placeholder', 'password')
password_input.classList = 'form-control'

//===========================================
const password_div = document.createElement('div')
password_div.classList = 'mb-3'

password_div.appendChild(password_input)
form_in.appendChild(password_div)
form.appendChild(form_in)
block1.appendChild(form)
main.appendChild(block1)
//===========================================
const block_button = document.createElement('div')
block_button.classList = 'row d-flex ps-5'
//===========================================
const block_button_in = document.createElement('div')
block_button_in.classList = 'col-sm-1 col-md-1'
//===========================================
const button_reg = document.createElement('button')
button_reg.setAttribute('id', 'register')
button_reg.classList = 'btn btn-outline-primary'
button_reg.innerText = 'register'

const button_login = document.createElement('button')
button_login.setAttribute('id', 'login')
button_login.classList = 'btn btn-outline-primary'
button_login.innerText = 'login'

block_button_in.appendChild(button_reg)
block_button_in.appendChild(button_login)
block_button.appendChild(block_button_in)
main.appendChild(block_button)
//===========================================
const block_change = document.createElement('div')
block_change.classList = 'row d-flex ps-5'
//===========================================
const block_change_in = document.createElement('div')
block_change_in.classList = 'col-sm-1 col-md-1 d-flex justify-content-center'
//===========================================
const change_button = document.createElement('button')
change_button.setAttribute('id', 'change')
change_button.classList = 'btn btn-outline-dark'
change_button.innerText = 'A'

block_change_in.appendChild(change_button)
block_change.appendChild(block_change_in)
main.appendChild(block_change)
//===========================================
const log_reg = document.createElement('div')
log_reg.setAttribute('id', 'log_reg')
log_reg.appendChild(main)
//===========================================
export{log_reg}
export{button_reg}
export{button_login}
export{change_button}