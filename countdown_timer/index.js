const newYears = '1 Jan 2023'

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const currentDate = new Date();
    const newYearsDate = new Date(newYears);

    const totalSeconds = (newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    console.log(days, hours, mins, seconds)
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time
}

//initial call
countdown()


setInterval(countdown, 1000);

