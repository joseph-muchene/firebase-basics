// update the user displayName and Profile
document.getElementById("btn").onclick = function () {
  const name = document.getElementById("name").value;
  const photo = document.getElementById("photo").value;
  console.log(name, photo);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      user
        .updateProfile({
          displayName: name,
          profilePhoto: photo,
        })
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      console.log("user is signed out");
    }
  });
};
