firebase.auth().onAuthStateChanged((user) => {
  let userId = user.uid;
  if (user) {
    firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .get()
      .then((doc) => {
        const username = doc.data().userName;

        document.getElementById("welcome").innerText = username;
      });

    // redirect to dashboard
    // document.getElementById("info").innerText = user.email;
  } else {
    document.getElementById("welcome").innerText =
      "you must be logged in to access this page";
  }
});

// signout

document.getElementById("logout").onclick = function () {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logged out succesfully");
      window.location = "/";
    });
};
