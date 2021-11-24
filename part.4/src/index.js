const clockTitle = document.querySelector(".js-clock");


function timer() {
    const dday = new Date("2021-12-25");
    const date = new Date();
    const chrismas = (dday - date) / 1000;
    const days = String(Math.floor(chrismas / 3600 / 24)).padStart(2, "0");
    const hours = String(Math.floor((chrismas / 3600) % 24)).padStart(2, "0");
    const minutes = String(Math.floor((chrismas / 60) % 60)).padStart(2, "0");
    const seconds = String(Math.floor((chrismas) % 60)).padStart(2, "0");
    clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

timer();
setInterval(timer, 1000);

