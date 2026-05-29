const w = document.getElementById("weight");
const h = document.getElementById("height");
const btn = document.getElementById("btn");
const res = document.getElementById("result");
btn.addEventListener("click", () => {
  let weight = Number(w.value);
  let height = Number(h.value);
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    res.innerText = "Please enter valid weight and height";
    return;
  }
  let bmi = weight / (height / 100) ** 2;
  res.innerText = `Your BMI is: ${bmi.toFixed(2)}`;
});
