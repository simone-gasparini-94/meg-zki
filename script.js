function updateTime() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Europe/Berlin' };
    const localTime = new Intl.DateTimeFormat('de-DE', options).format(new Date());
    const timeDisplay = document.querySelector("#time-display");
    timeDisplay.textContent = `${localTime}`;
}

setInterval(updateTime, 1000);
updateTime();

const star = document.querySelector("#star");

function rotateStar() {
    const scrollPosition = window.scrollY;
    const rotationDegrees =  scrollPosition * 0.1;
    star.style.transform = `rotate(${rotationDegrees}deg)`;
}

window.addEventListener("scroll", rotateStar);