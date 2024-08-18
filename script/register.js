
import { createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
// import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import{auth} from "./config.js"





const form = document.querySelector('#form');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');



form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(firstName.value);
    console.log(lastName.value);
    console.log(email.value);
    console.log(password.value);

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location = './login.html'      
    })
    .catch((error) => {
      const errorMessage = error.message;
     console.log(errorMessage);
    });


    firstName.value = ''
    lastName.value = ''
    email.value = ''
    password.value = ''
})