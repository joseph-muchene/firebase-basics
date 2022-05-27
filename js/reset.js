document.getElementById("submit").onclick = function () {
  var email = document.getElementById("email").value;
  firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {})
    .catch((error) => {
      var errorMessage = error.message;
      alert(errorMessage);
    });
};
