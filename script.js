const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const count = document.getElementById("count");

let interval = "";
let amount = 0;

let scoreCounter = () => {
  amount++;
  count.textContent = amount;
};

document.querySelector("button").addEventListener("click", () => {
  cactus.classList.add("cactusM");

  interval = setInterval(scoreCounter, 2000);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
});

setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (dinoTop >= 140 && cactusLeft > 0 && cactusLeft < 60) {
    document.getElementById("countMax").textContent <
      document.getElementById("count").textContent &&
      (document.getElementById("countMax").textContent =
        document.getElementById("count").textContent);
    alert("GAME OVER");
    cactus.classList.remove("cactusM");
    clearInterval(interval);
    document.getElementById("count").textContent = 0;
    amount = 0;
  }
}, 10);
