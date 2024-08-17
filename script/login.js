import { 
    signInWithEmailAndPassword,
    onAuthStateChanged,
 } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import{auth} from "./config.js"


const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');


function checkUser(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          console.log(uid);
        } else {
           window.location = './login.html'
        }
      })
}
checkUser()
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(email.value);
    console.log(password.value);
    signInWithEmailAndPassword(auth, email.value, password.value)   
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    window.location = './index.html'
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  email.value = ''
  password.value = ''
})