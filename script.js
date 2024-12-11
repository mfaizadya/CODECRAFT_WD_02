let timer; 
let elapsedTime = 0; 
let isRunning = false; 

const display = document.querySelector('.timerDisplay'); 
const startButton = document.getElementById('start'); 
const stopButton = document.getElementById('stop'); 
const resetButton = document.getElementById('reset'); 

function formatTime(ms) {
  const milliseconds = ms % 1000; 
  const seconds = Math.floor((ms / 1000) % 60); 
  const minutes = Math.floor((ms / 1000 / 60) % 60); 
  const hours = Math.floor(ms / 1000 / 60 / 60); 

  return `${String(hours).padStart(2, '0')}:
          ${String(minutes).padStart(2, '0')}:
          ${String(seconds).padStart(2, '0')}:
          ${String(milliseconds).padStart(3, '0')}`;
}

function updateDisplay() {
  display.textContent = formatTime(elapsedTime); 
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true; 
    const startTime = Date.now() - elapsedTime; 
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime; 
      updateDisplay(); 
    }, 10); 
  }
}

function stopStopwatch() {
  if (isRunning) {
    isRunning = false; 
    clearInterval(timer); 
  }
}


function resetStopwatch() {
  stopStopwatch(); 
  elapsedTime = 0; 
  updateDisplay(); 
}

startButton.addEventListener('click', startStopwatch); 
stopButton.addEventListener('click', stopStopwatch); 
resetButton.addEventListener('click', resetStopwatch); 

updateDisplay();
