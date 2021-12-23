/*MENU SHOW*/

const toggleLine = document.getElementById("toggleIdLine");
const toggleCross = document.getElementById("toggleIdCross");
const nav = document.getElementById("nav-menu");
document.getElementById("toggleIdLine").style.display = "block";
document.getElementById("toggleIdCross").style.display = "none";
// nav = document.getElementById(navId)

let clicked = false;

toggleLine.addEventListener("click", function () {
  if (!clicked) {
    nav.classList.add("show");
    clicked = true;
    document.getElementById("toggleIdLine").style.display = "none";
    document.getElementById("toggleIdCross").style.display = "block";
  }
});

toggleCross.addEventListener("click", function () {
  if (clicked) {
    nav.classList.remove("show");
    clicked = false;
    document.getElementById("toggleIdLine").style.display = "block";
    document.getElementById("toggleIdCross").style.display = "none";
  }
});
