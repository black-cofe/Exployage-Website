window.onscroll = function() {myFunction()};

var header = document.getElementById("nav");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > 10) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}