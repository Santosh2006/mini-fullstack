let time = 60;

let timer = setInterval(function() {
    document.getElementById("timer").textContent = time;
    time--;

    if (time < 0) {
        clearInterval(timer);
        document.getElementById("timer").textContent = "Time's Up!";
    }
}, 1000);
