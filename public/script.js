/*/ Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO-0GTqhoi3KHngEFr2SiG40pPgQ74Dy8",
  authDomain: "website-4162f.firebaseapp.com",
  databaseURL: "https://website-4162f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "website-4162f",
  storageBucket: "website-4162f.appspot.com",
  messagingSenderId: "796506113379",
  appId: "1:796506113379:web:232125127205f82381bf56",
  measurementId: "G-8Q5FXGDPZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
document.getElementById("sub").addEventListener("click", function writeUserData(name, age) {
    const db = getDatabase();
    name = document.getElementById("ccn").value
    age = document.getElementById("tbk").value
    set(ref(db, 'users/'), {
      username: name,
      age: age
    });
  })
*/