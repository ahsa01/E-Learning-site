import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
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
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const submit = document.getElementById("button");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
      const user = userCredential.user;
      alert("Sucessfully login...");
      window.location.href = "/Public/HTML/home.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
})


const google_login = document.getElementById("button2");
google_login.addEventListener("click", function (event) {
  event.preventDefault();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      alert("Sucessfully login...")
      window.location.href = "/Public/HTML/home.html";
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
})



// var images = ["../Images/login-image1.jpg", "../Images/login-image2.jpg", "../Images/login-image3.jpg"];
// var currentIndex = 0;
// var sliderImage = document.getElementById("sliderImage");

// function nextImage() {
//   var nextIndex = (currentIndex + 1) % images.length;
//   var nextImage = new Image();
//   nextImage.src = images[nextIndex];
//   nextImage.classList.add("new-image");
//   nextImage.onload = function () {
//     sliderImage.src = nextImage.src;
//     currentIndex = nextIndex;
//     setTimeout(() => {
//       nextImage.classList.remove("new-image");
//     }, 100);
//   };
// }

setInterval(nextImage, 3000); 
