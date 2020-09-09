let value = document.querySelector("#value");
let btns = document.querySelectorAll(".btn");
let counter = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }
    if (counter < 0) value.style.color = "red";
    if (counter > 0) value.style.color = "green";
    if (counter == 0) value.style.color = "#222";
    value.textContent = counter;
  });
});
