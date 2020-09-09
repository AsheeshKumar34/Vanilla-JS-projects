const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

let btn = document.getElementById("btn");
let color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let randomNum = randomNumber();
  let randomColor = colors[randomNum];
  color.textContent = randomColor;
  document.body.style.backgroundColor = randomColor;
});

const randomNumber = () => Math.floor(Math.random() * colors.length);
