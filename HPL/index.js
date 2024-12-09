// Example for a countdown timer
const countDownDate = new Date("Dec 10, 2024 10:00:00").getTime();

const x = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Match Start!";
  }
}, 1000);
