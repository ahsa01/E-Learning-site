import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCEPI9_fUCY4kn0mWs85L9G13Qck0EEWcc",
  authDomain: "e-learn-611ca.firebaseapp.com",
  projectId: "e-learn-611ca",
  storageBucket: "e-learn-611ca.appspot.com",
  messagingSenderId: "206710475177",
  appId: "1:206710475177:web:64a32f390984708d181cb8",
  measurementId: "G-W8L6GJB4V9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

var but = document.getElementById("submit");


const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email=document.getElementById('Email_inp').value;
  const password=document.getElementById('pass').value;
  createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      const user = userCredential.user;
      alert("Register Sucessfully..");
      window.location.href = "/index.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
})