let myButton = document.querySelector("button");
let myHeading = document.querySelector(".welcome-page");
var title = document.getElementsByClassName(".welcome-page");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "I am " + myName;
  }
}

myButton.onclick = function () {
  setUserName();
};
