const typedText = "Welcome to TARGEST";
let index = 0;

function type() {
  if (index < typedText.length) {
    document.querySelector("h1").innerHTML += typedText.charAt(index);
    index++;
    setTimeout(type, 45);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  type();
});
