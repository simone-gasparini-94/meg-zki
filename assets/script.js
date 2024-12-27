function updateTime() {
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: 'Europe/Berlin' };
    const localTime = new Intl.DateTimeFormat('de-DE', options).format(new Date());
    const timeDisplay = document.querySelector(".time-display");
    timeDisplay.textContent = `${localTime}`;
}

setInterval(updateTime, 1000);
updateTime();


const star = document.querySelector(".star");

function rotateStar() {
    const scrollPosition = window.scrollY;
    const rotationDegrees =  scrollPosition * 0.2;
    star.style.transform = `rotate(${rotationDegrees}deg)`;
}

window.addEventListener("scroll", rotateStar);


window.addEventListener("load", () => {
    setTimeout(() => {
        const mainText = document.querySelector(".main-text");
        mainText.style.opacity = 1;
        mainText.style.transform = "translateY(0)";
    }, 400);
});

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add("dark-mode");
};

const toggleButton = document.querySelector(".toggle-button")

const toggle = () => {
    document.documentElement.classList.toggle("dark-mode");
};

toggleButton.addEventListener("click", toggle);

const textHover = document.querySelector(".underlined");
const meg = document.querySelector(".meg");

textHover.addEventListener("mouseenter", () => {
    meg.style.display = "inline";
});

textHover.addEventListener("mouseleave", () => {
    meg.style.display = "none";
});