const start = document.getElementById("start");
const stop = document.getElementById("stop");
const box = document.getElementsByClassName("container");
let t;
start.addEventListener("click", () => {
  t = setInterval(() => {
    let a = "0123456789ABCDEF";
    let c = "#";
    for (let i = 0; i < 6; i++) {
      c = c + a.charAt(Math.floor(Math.random() * 15 + 1));
    }
    document.body.style.backgroundColor = c;
    console.log(c);
  }, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(t);
});
