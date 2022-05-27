document.getElementById("btn").onclick = function () {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // alert("login was successful for email " + user.email);
      window.location.href = "dashboard.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
};

// set an authentication observer
//  This observer gets called whenever the user's sign-in state changes.

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (user) {
    console.log(user);
    document.getElementById("welcome").innerText = `welcome ${user.email}`;

    // redirect to dashboard
    document.getElementById("info").innerText = user.email;
  } else {
    console.log("user is signed out");
  }
});

// // get the currently signed in user
// let user = firebase.auth().currentUser;
// console.log(user);
