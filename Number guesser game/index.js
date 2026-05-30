const t = document.getElementById("inp");
const btn = document.getElementById("btn");
const res = document.getElementById("result");
const min = 1;
const max = 100;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
git;
btn.addEventListener("click", () => {
  let guess = Number(t.value);

  if (isNaN(guess) || guess < min || guess > max) {
    res.innerText = `Please enter a valid number between ${min} and ${max}`;
    return;
  }
  if (guess === randomNum) {
    res.innerText = "Congratulations! You guessed the number!";
  } else if (guess < randomNum) {
    res.innerText = "Too low! Try again.";
  } else {
    res.innerText = "Too high! Try again.";
  }
});
