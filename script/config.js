import { initializeApp , getApp  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
// import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";




const firebaseConfig = {
  apiKey: "AIzaSyCp3OLbrH2ikJS2vr4rg_X_IgMzL9YIceg",
  authDomain: "ecommerce-store-336fc.firebaseapp.com",
  projectId: "ecommerce-store-336fc",
  storageBucket: "ecommerce-store-336fc.appspot.com",
  messagingSenderId: "300742634601",
  appId: "1:300742634601:web:77070c6cff1b4bb95b46f8",
  measurementId: "G-FLK2PK3C53"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
// const firebaseApp = getApp();
// export const storage = getStorage(firebaseApp, "gs://ecommerce-store-336fc.appspot.com")
