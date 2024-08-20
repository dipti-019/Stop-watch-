let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];//Variables to keep track of the stopwatch time.
let timerRef = document.querySelector(".timer-display");// reference to the element with the class .timer-display where the time will be displayed.
let int = null;//return intervalID

document.getElementById("start-timer").addEventListener("click", () => { //eventlistener
  if (int !== null) {
    clearInterval(int); // If a timer is already running (int !== null), it stops the previous timer using clearInterval(int).
  }
  int = setInterval(displayTimer, 10);//Sets up a new interval to call the displayTimer function every 10 milliseconds.
});

function displayTimer() {
  milliseconds += 10;// Adds 10 milliseconds each time the function is called.
  seconds = milliseconds == 1000 ? (seconds + 1) % 60 : seconds; //Seconds: Increments by 1 when milliseconds reach 1000,warps around 0 to 59
  minutes = seconds == 0 && milliseconds == 0 ? (minutes + 1) % 60 : minutes;//Increments by 1 when seconds and milliseconds are both 0
  hours = minutes == 0 && seconds == 0 && milliseconds == 0 ? hours + 1 : hours;//Increments by 1 when minutes,seconds and milliseconds ==0 
  milliseconds = milliseconds == 1000 ? 0 : milliseconds;//Resets milliseconds to 0 after reaching 1000.

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  let ms = String(milliseconds).padStart(3, "0");
// Formats hours, minutes, seconds, and milliseconds to ensure they are always two or three digits (e.g., "05" instead of "5")
  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});
// event listener on pause button when click it pauses on the the same interval it is going 
document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  // event listener on reset button to resent and start from starting 
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];// after reset the all parameters are intialized again to 0
  timerRef.innerHTML = "00 : 00 : 00 : 000";
});
