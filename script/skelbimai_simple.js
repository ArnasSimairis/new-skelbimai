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
export{skelb}
export{logout}
