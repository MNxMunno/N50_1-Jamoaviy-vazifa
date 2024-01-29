let modeBtn = document.getElementById("dark-light");

modeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const header = document.querySelector("body");
const menuBtn = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  header.classList.toggle("open");
});



window.addEventListener('scroll', function () {
  toggleBacktop();
});

let backtop = document.getElementById('backtop');

function toggleBacktop() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.style.bottom = '20px';
  } else {
    backtop.style.bottom = '-50px';
  }
}