document.getElementById("btn").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let error = document.getElementById("error");
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data) => {
      // generate a collection called users

      let userId = data.user.uid;
      firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .set({
          userEmail: email,
          userName: name,
          userId: data.user.uid,
        })
        .then(() => {
          // redirect the user
          window.location.href = "login.html";
        });
    })
    .catch((err) => {
      error.innerText = err.message;
    });
});
