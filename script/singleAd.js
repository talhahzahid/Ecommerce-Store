


import {  onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
import { auth , db } from "./config.js";

onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      window.location = 'index.html'
    }
  });



const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const price = document.querySelector('#price');
const namee = document.querySelector('#Name');
const number = document.querySelector('#number');

form.addEventListener("submit", async (event)=>{
    event.preventDefault();
    // div.innerHtml = ''
    console.log(title.value);
    console.log(description.value);
    console.log(price.value);
    console.log(namee.value);
    console.log(number.value);
    
    try {
        const docRef = await addDoc(collection(db, "users"), {
          title:title.value,
          description:description.value,
          price:price.value,
          Name:namee.value,
          number:number.value,
          uid: auth.currentUser.uid
        });
        alert("Ad post Succesfully")
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }




    title.value = ''
    description.value = ''
    price.value = ''
    namee.value = ''
    number.value = ''
})