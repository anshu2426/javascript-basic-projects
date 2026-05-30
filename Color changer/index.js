const bg = document.getElementById("bg");
const btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
  button.addEventListener("click", (e) => {
    bg.style.backgroundColor = e.target.innerText;
  });
});
