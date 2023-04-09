const typedText = "Welcome to TARGEST";
let index = 0;

function type() {
  if (index < typedText.length) {
    document.querySelector("#typedText1").innerHTML += typedText.charAt(index);
    index++;
    setTimeout(type, 45);
  }

}


document.addEventListener("DOMContentLoaded", function () {
  type();
});


// Back to top button
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

backToTopButton.addEventListener("click", function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
});
