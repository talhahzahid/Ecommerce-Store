import { 
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
import {  auth ,db } from "./config.js";

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

const div = document.querySelector("#div");

let arr = []
async function getProductData(){
    const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
    arr.push(doc.data())
});
console.log(arr);
renderData()
}

function renderData(){
    div.innerHTML = ""
    arr.map((item)=>{
        div.innerHTML += `
            <div class="card bg-base-100 w-96 shadow-xl">
              <div class="card-body">
                <h2 class="card-title">${item.title}</h2>
                <p>${item.description}</p>
                <p>${item.price}</p>
                <p>${item.Name}</p>
                <p>${item.number}</p>
                <div class="card-actions justify-end">
                  <button class="btn btn-secondary">More Info</button>
                </div>
              </div>
            </div>
        `
      })
}

getProductData()