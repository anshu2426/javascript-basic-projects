const t = document.getElementById("time");
const d = document.getElementById("date");
function updateTime() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  h = h > 12 ? h - 12 : h;
  const ampm = now.getHours() >= 12 ? "PM" : "AM";
  t.innerText = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}${ampm}`;
  const day = now.getDate();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();
  const dow = now.getDay();
  const a = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  d.innerText = `${day.toString().padStart(2, "0")}/${month.toString().padStart(2, "0")}/${year} & Day:${a[dow]}`;
}
setInterval(updateTime, 1000);
updateTime();
