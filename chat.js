// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2WwW-Zyye004GUzaXHSMsubWhyUVO6aM",
    authDomain: "pro100-b78eb.firebaseapp.com",
    projectId: "pro100-b78eb",
    storageBucket: "pro100-b78eb.appspot.com",
    messagingSenderId: "464303435926",
    appId: "1:464303435926:web:6035d45419b7a28c0e52b7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
   
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}

function logout(){ 

    localStorage.setItem("user_name", user_name);
    window.location="chat_room.html";
}


