
let form = document.querySelector('#form')
let name = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let cnic = document.querySelector('#cnic')
// let btn = document.querySelector('#btn')

form.addEventListener('submit',function(event){
event.preventDefault()
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);
    console.log(cnic.value);
})


// iske baad regex wali validatoin lagani h ab wo kal karonga Insha Allah !




















