// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCelf-WHtf-5eAmqDAQTOS2jEn7N1De9Wk",
  authDomain: "signin-firebase-2def7.firebaseapp.com",
  databaseURL: "https://signin-firebase-2def7-default-rtdb.firebaseio.com",
  projectId: "signin-firebase-2def7",
  storageBucket: "signin-firebase-2def7.appspot.com",
  messagingSenderId: "1065072376936",
  appId: "1:1065072376936:web:777a5d82c65d25dbf50fdd",
  measurementId: "G-NQWH7CZNQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);




const db = getFirestore(app)

const getData = async (db) => {
  const querySnapshot = await getDocs(collection(db, "pet"));
  let rows = ``;
  querySnapshot.forEach((doc) => {
    rows += ` <div class="card mb-3" style="width: 90%">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${doc.data().avatar}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${doc.data().name}</h5>
                <p class="card-text">Type:${doc.data().type}</p>
                <p class="card-text">Age:${doc.data().age}</p>
                <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>`
    // console.log(`${doc.id} => ${doc.data()}`);
  });
  return rows;
}
const list = document.getElementById("list")
list.innerHTML += await getData(db);

