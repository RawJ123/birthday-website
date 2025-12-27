document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("surpriseBtn");
  const surprise = document.getElementById("surprise");

  btn.addEventListener("click", () => {
    surprise.innerHTML =
      "💖 Surprise! 💕 Wishing you a birthday full of love, smiles, and beautiful moments ✨🎂";
  });
});
