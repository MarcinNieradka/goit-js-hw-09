const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop');
let timerEl = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', e => {
  // console.log(e.target);
  e.currentTarget.disabled = true;
  timerEl = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', e => {
  // console.log(e);
  btnStart.disabled = false;
  clearInterval(timerEl);
});
