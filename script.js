var a = document.querySelectorAll(".tick");

function rotateMarks() {
  for (var i = 0; i < a.length; i++) {
    a[i].style.setProperty("--rotationD", (i + 5) * 6);
  }
}
rotateMarks();

// clock timings
var minH = document.querySelector(".minH");
var secH = document.querySelector(".secH");
var hourH = document.querySelector(".hourH");

function rotateHands(hands, ticks) {
  hands.style.setProperty("--rotateH", ticks);
}

function setClock() {
  var clockTime = new Date();
  var secR = clockTime.getSeconds() / 60;
  var minR = (secR + clockTime.getMinutes()) / 60;
  var hourR = (minR + clockTime.getHours()) / 12;

  rotateHands(secH, secR * 360);
  rotateHands(minH, minR * 360);
  rotateHands(hourH, hourR * 360);
}
setClock();
setInterval(setClock, 1000);
