
   var firebaseConfig = {
    apiKey: "AIzaSyAnYl-i8zYYrmVX6d-TthfX-MvgAGE_kq4",
    authDomain: "hw-kwitter-8874b.firebaseapp.com",
    projectId: "hw-kwitter-8874b",
    storageBucket: "hw-kwitter-8874b.appspot.com",
    messagingSenderId: "38958428942",
    appId: "1:38958428942:web:921612457a66947d839d5f"
  };
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      });});}
getData();
