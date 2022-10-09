const t = document.getElementById("time");
t.innerHTML = "00:00:00";
let startTime;
let interval;

function start() {
    stop();
    startTime = new Date();
    interval = setInterval(update, 10);
}

function update() {
    let time = new Date() - startTime;
    let micro = Math.floor(time % 1000);
    time /= 1000;

    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.floor(time % 60);

    const zeroPad = (num, places) => String(num).padStart(places, '0')
    t.innerHTML = zeroPad(Math.floor(minutes), 2) + ":" + zeroPad(Math.floor(seconds), 2) + ":" + zeroPad(Math.floor(micro/10), 2);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    t.innerHTML = "00:00:00";
    clearInterval(interval);
}