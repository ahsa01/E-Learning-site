import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getDatabase, ref, set, remove, onChildAdded, onChildRemoved} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
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
const db = getDatabase(app);

// variables
var msgTxt = document.getElementById('msgTxt');
var sender;
if(sessionStorage.getItem('sender')){
    sender = sessionStorage.getItem('sender');
} else {
    sender = prompt('PLEASE ENTER YOUR NAME');
    sessionStorage.setItem('sender',sender);
}

// TO SEND MESSAGES
module.sendMsg = function sendMsg(){
    var msg = msgTxt.value;
    var timestamp = new Date().getTime();
    set(ref(db,"messages/"+timestamp),{
        msg : msg,
        sender : sender
    })

    msgTxt.value="";
}

// TO RECEIVE MSG
onChildAdded(ref(db,"messages"), (data)=>{
    if(data.val().sender == sender){
        messages.innerHTML += "<div style=justify-content:end class=outer id="+data.key+"><div id=inner class=me>you : "+data.val().msg+"<button id=dltMsg onclick=module.dltMsg("+data.key+")>DELETE</button></div></div>";
    } else {
        messages.innerHTML += "<div class=outer id="+data.key+"><div id=inner class=notMe>"+data.val().sender+" : "+data.val().msg+"</div></div>";
    }
})



// TO DELETE MSG
module.dltMsg = function dltMsg(key){
    remove(ref(db,"messages/"+key));
}


// WHEN MSG IS DELETED
onChildRemoved(ref(db,"messages"),(data)=>{
    var msgBox = document.getElementById(data.key);
    messages.removeChild(msgBox);
})