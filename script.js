const startDate = new Date("2024-11-10T00:00:00");

function updateTimer() {
  const now = new Date();
  let diff = Math.floor((now - startDate) / 1000);

  const days = Math.floor(diff / (3600 * 24));
  diff %= 3600 * 24;

  const hours = Math.floor(diff / 3600);
  diff %= 3600;

  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  document.getElementById("timer").textContent =
    `for ${days} day ${hours} h ${minutes} m ${seconds} s`;
}

updateTimer();
setInterval(updateTimer, 1000);

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.animationDuration = 6 + Math.random() * 6 + "s";

  document.body.appendChild(petal);

  setTimeout(() => petal.remove(), 12000);
}

setInterval(createPetal, 400);
