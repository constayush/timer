let counterNo = document.querySelector("#counter").innerHTML;
let interval;

let soundinterval;
let beat = new Audio("sound.mp3");
document.querySelector(".d").addEventListener("click", dec);
document.querySelector(".i").addEventListener("click", inc);
document.querySelector(".r").addEventListener("click", re);

function re() {
  document.querySelector("#counter").innerHTML = 0;
  counterNo = 0;
  i = 0;
  clearInterval(interval);

  document.querySelector(".counter").style.width = "30ch";

  document.querySelector(".i").style.display = "flex";

  document.querySelector(".d").style.display = "flex";

  document.querySelector(".min").style.display = "flex";

  document.querySelector(".s").disabled = false;

  document.querySelector("#counter").style.color = "#3d424a";
}

function dec() {
  if (counterNo >= 1) {
    document.querySelector("#counter").innerHTML = --counterNo;
  } else {
    document.querySelector("#counter").innerHTML = 0;
  }
}

function inc() {
  document.querySelector("#counter").innerHTML = ++counterNo;
  document.querySelector("#counter").style.color = "#3d424a";
}

let i = 0;

function st() {
  if (parseInt(document.querySelector("#counter").innerHTML) === 0) {
    document.querySelector("#counter").innerHTML = "0";
    document.querySelector("#counter").style.color = "red";
  } else {
    let a = parseInt(document.querySelector("#counter").innerHTML) * 60;

    document.querySelector(".counter").style.transition = "width .2s ease";
    document.querySelector(".counter").style.width = "50%";

    document.querySelector(".i").style.display = "none";

    document.querySelector(".d").style.display = "none";
    document.querySelector(".min").style.display = "none";

    function clickedstart() {
      if (i <= a - 1) {
        document.querySelector("#counter").innerHTML = String(i) + " sec";
        i++;
      } else if (i == a) {
        soundinterval = setInterval(playsound, 500);
        document.querySelector("#counter").innerHTML = "times up!";
        function playsound() {
          beat.play();
          beat.stop();
        }

        clearInterval(interval);
      }
    }

    document.querySelector(".s").disabled = true;
    interval = setInterval(clickedstart, 1000);
  }
}

function stop() {
  document.querySelector("#counter").innerHTML = 0;
  counterNo = 0;
  i = 0;
  clearInterval(interval);

  document.querySelector(".counter").style.width = "30ch";

  document.querySelector(".i").style.display = "flex";

  document.querySelector(".d").style.display = "flex";

  document.querySelector(".min").style.display = "flex";

  document.querySelector(".s").disabled = false;

  document.querySelector("#counter").style.color = "#3d424a";

  beat.pause();
  clearInterval(soundinterval);
}
