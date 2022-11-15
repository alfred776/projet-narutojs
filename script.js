
const list = document.querySelectorAll('.e-1')


const lettre = document.getElementsByClassName("lettre");


lettre[0].addEventListener("click", function() {
  lettre[0].innerHTML = "&#127538";
});

lettre[1].addEventListener("click", function() {
  lettre[1].innerHTML = "&#128293";
});

lettre[2].addEventListener("click", function() {
  lettre[2].innerHTML = "&#127386";
});

lettre[3].addEventListener("click", function() {
  lettre[3].innerHTML = "&#128293";
});

lettre[4].addEventListener("click", function() {
  lettre[4].innerHTML = "&#127539";
});


function animationLetter(event) {
  let counter = 0

  setInterval(() => {
     list[counter].style.marginTop = "0px"
     counter ++
  }, 1000)
}
window.addEventListener("DOMContentLoaded", animationLetter)