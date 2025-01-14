let timer;
let isRunning = false;
let isPaused = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timeDisplay = document.getElementById("timeDisplay");
const startStopButton = document.getElementById("startStopButton");
const pauseButton = document.getElementById("pauseButton");
const resetButton = document.getElementById("resetButton");

function formatTime(seconds, minutes, hours) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    timeDisplay.textContent = formatTime(seconds, minutes, hours);
}

// Start or stop the timer
startStopButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.textContent = "Start";
        startStopButton.style.backgroundColor = "rgb(60, 139, 60)";
        pauseButton.style.display = "none";  // Hide pause button
    } else {
        if (isPaused) {
            timer = setInterval(updateTime, 1000);
            startStopButton.textContent = "Stop";
            startStopButton.style.backgroundColor = "tranparent";
            pauseButton.style.display = "inline-block";  // Show pause button
            isPaused = false;
        } else {
            timer = setInterval(updateTime, 1000);
            startStopButton.textContent = "Stop";
            startStopButton.style.backgroundColor = "tranparent";
            pauseButton.style.display = "inline-block";  // Show pause button
        }
    }
    isRunning = !isRunning;
});

// Pause the timer
pauseButton.addEventListener("click", () => {
    clearInterval(timer);
    isPaused = true;
    startStopButton.textContent = "Resume";
    pauseButton.style.display = "none";  // Hide pause button
});

// Reset the timer
resetButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    isPaused = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeDisplay.textContent = formatTime(seconds, minutes, hours);
    startStopButton.textContent = "Start";
    startStopButton.style.backgroundColor = "rgb(60, 139, 60)";
    pauseButton.style.display = "none";  // Hide pause button
});
