const btnStart = document.getElementById('startBtn');
const countdownEl = document.getElementById('countdown');
const messageEl = document.getElementById('message');
let interval;

btnStart.addEventListener('click', function () {
  clearInterval(interval);
  messageEl.innerHTML = '';
  let seconds = Number(prompt('Enter time in seconds:'));

  view(seconds);

  interval = setInterval(() => {
    seconds--;

    if (seconds <= 0) {
      clearInterval(interval);
      countdownEl.style.display = 'none';
      messageEl.innerHTML = "Time's up";
    } else {
      view(seconds);
    }
  }, 1000);
});

function view(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  countdownEl.innerHTML = `${mins}:${secs}`;
}
