const heartsContainer = document.querySelector(".hearts");
const starsContainer = document.querySelector(".stars");

/* Create hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 7 + Math.random() * 5 + "s";
  heart.style.opacity = 0.4 + Math.random() * 0.6;

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 12000);
}

/* Create stars */
function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = 8 + Math.random() * 6 + "s";
  star.style.opacity = 0.3 + Math.random() * 0.7;

  starsContainer.appendChild(star);

  setTimeout(() => star.remove(), 14000);
}

/* Intervals (balanced & elegant) */
setInterval(createHeart, 450);
setInterval(createStar, 350);
