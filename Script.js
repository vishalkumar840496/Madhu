const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const confetti = document.getElementById("confetti");

surpriseBtn.addEventListener("click", () => {
  surprise.hidden = false;

  surpriseBtn.textContent = "🎉 Surprise Opened!";

  surpriseBtn.disabled = true;

  createConfetti(150);

  setTimeout(() => {
    surprise.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 300);
});

function createConfetti(amount) {

  const pieces = ["🎉", "✨", "💖", "🌸", "⭐", "🎊"];

  for (let i = 0; i < amount; i++) {

    const piece = document.createElement("div");

    piece.className = "confetti-piece";

    piece.textContent =
      pieces[Math.floor(Math.random() * pieces.length)];

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.fontSize =
      10 + Math.random() * 18 + "px";

    piece.style.animationDuration =
      2 + Math.random() * 4 + "s";

    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    confetti.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 6000);
  }
}
