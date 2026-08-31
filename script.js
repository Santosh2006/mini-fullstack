let time = 60;
let timer;

let display = document.getElementById("timer");
let startButton = document.getElementById("start");
let resetButton = document.getElementById("reset");

startButton.addEventListener("click", function() {

    clearInterval(timer);

    timer = setInterval(function() {

        display.textContent = time;

        if (time <= 0) {
            clearInterval(timer);
            display.textContent = "Time's Up!";
        }

        time--;

    }, 1000);
});


resetButton.addEventListener("click", function() {

    clearInterval(timer);

    time = 60;
    display.textContent = time;

});