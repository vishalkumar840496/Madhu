const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const finalScreen = document.getElementById("finalScreen");

const startBtn = document.getElementById("startBtn");
const giftBtn = document.getElementById("giftBtn");
const celebrateBtn = document.getElementById("celebrateBtn");
const restartBtn = document.getElementById("restartBtn");

const surprise = document.getElementById("surprise");
const gift = document.getElementById("gift");
const giftText = document.getElementById("giftText");

const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");

const hearts = document.getElementById("hearts");
const balloons = document.getElementById("balloons");
const confetti = document.getElementById("confetti");
const fireworks = document.getElementById("fireworks");


/* MUSIC */

musicBtn.addEventListener("click", async () => {

  if (music.paused) {

    try {
      await music.play();
      musicBtn.textContent = "🔊 Music On";
    } catch {
      musicBtn.textContent = "🎵 Tap Again";
    }

  } else {

    music.pause();
    musicBtn.textContent = "🔇 Music Off";

  }

});


/* OPEN SURPRISE */

startBtn.addEventListener("click", () => {

  opening.classList.remove("active");
  birthday.classList.add("active");

  createHearts(25);
  createBalloons(15);
  createConfetti(100);

  setTimeout(() => {
    music.play().catch(() => {});
    musicBtn.textContent = "🔊 Music On";
  }, 500);

});


/* GIFT */

giftBtn.addEventListener("click", () => {

  gift.style.animation = "none";

  setTimeout(() => {

    gift.textContent = "✨🎁✨";

    giftText.textContent =
      "Surprise! This little wish is specially for you, Fruityy! 💖";

    surprise.classList.remove("hidden");

    giftBtn.textContent = "🎉 Surprise Opened!";

    giftBtn.disabled = true;

    createConfetti(180);
    createHearts(35);
    createFireworks(8);

  }, 200);

});


/* BIG CELEBRATION */

celebrateBtn.addEventListener("click", () => {

  createConfetti(300);
  createHearts(60);
  createBalloons(25);
  createFireworks(15);

  setTimeout(() => {

    birthday.classList.remove("active");
    finalScreen.classList.add("active");

    createConfetti(200);
    createFireworks(10);

  }, 1800);

});


/* RESTART */

restartBtn.addEventListener("click", () => {

  finalScreen.classList.remove("active");
  opening.classList.add("active");

  surprise.classList.add("hidden");

  gift.textContent = "🎁";

  giftBtn.disabled = false;

  giftBtn.textContent = "🎁 Open The Gift";

});


/* HEARTS */

function createHearts(amount) {

  const emojis = [
    "💖",
    "💕",
    "💗",
    "❤️",
    "💓",
    "💞"
  ];

  for (let i = 0; i < amount; i++) {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left =
      Math.random() * 100 + "vw";

    heart.style.fontSize =
      15 + Math.random() * 30 + "px";

    heart.style.animationDuration =
      4 + Math.random() * 5 + "s";

    heart.style.animationDelay =
      Math.random() * 2 + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 9000);

  }

}


/* BALLOONS */

function createBalloons(amount) {

  const emojis = [
    "🎈",
    "🎈",
    "🎈",
    "🎈"
  ];

  for (let i = 0; i < amount; i++) {

    const balloon = document.createElement("div");

    balloon.className = "balloon";

    balloon.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    balloon.style.left =
      Math.random() * 100 + "vw";

    balloon.style.fontSize =
      35 + Math.random() * 30 + "px";

    balloon.style.animationDuration =
      6 + Math.random() * 5 + "s";

    balloon.style.animationDelay =
      Math.random() * 2 + "s";

    balloons.appendChild(balloon);

    setTimeout(() => {
      balloon.remove();
    }, 12000);

  }

}


/* CONFETTI */

function createConfetti(amount) {

  const emojis = [
    "🎉",
    "🎊",
    "✨",
    "⭐",
    "💖",
    "🌸",
    "🎈"
  ];

  for (let i = 0; i < amount; i++) {

    const piece = document.createElement("div");

    piece.className = "confetti-piece";

    piece.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.fontSize =
      10 + Math.random() * 20 + "px";

    piece.style.animationDuration =
      2 + Math.random() * 4 + "s";

    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    confetti.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 7000);

  }

}


/* FIREWORKS */

function createFireworks(amount) {

  for (let i = 0; i < amount; i++) {

    setTimeout(() => {

      const firework = document.createElement("div");

      firework.className = "firework";

      firework.textContent =
        ["🎆", "✨", "💥", "🌟"]
        [Math.floor(Math.random() * 4)];

      firework.style.left =
        10 + Math.random() * 80 + "vw";

      firework.style.top =
        10 + Math.random() * 60 + "vh";

      fireworks.appendChild(firework);

      setTimeout(() => {
        firework.remove();
      }, 1800);

    }, i * 180);

  }

}


/* START SMALL BACKGROUND ANIMATION */

setInterval(() => {

  createHearts(3);

}, 3500);

setInterval(() => {

  createBalloons(2);

}, 5000);
