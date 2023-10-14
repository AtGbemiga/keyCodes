// get all elements to update their content

function keyEventChallenge(e) {
  console.log(e);
  //   e.key === "W" && console.log("You pressed " + e.key);
  const eKey = document.querySelector(".key:first-child");
  const eKeyCode = document.querySelector(".key:nth-child(2)");
  const eCode = document.querySelector(".key:last-child");

  if (e.key) {
    eKey.textContent = "key: " + e.key;
    eKeyCode.textContent = "keyCode: " + e.keyCode;
    eCode.textContent = "code " + e.code;
  }
}
window.addEventListener("keydown", keyEventChallenge);
// keyEventChallenge();
