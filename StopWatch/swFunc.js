let time = document.querySelector("#Time");
let start = document.querySelector("#Start");
let stop = document.querySelector("#Stop");
let reset = document.querySelector("#Reset");

let timerId;
let timerRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

let resetTime = () => {
  minutes=0;
  seconds=0;
  hours=0;
  modifyTime();
}

let setTime = () => {
  seconds++;
  if(seconds === 60){
    minutes++;
    seconds = 0;
  }
  if(minutes === 60){
    hours++;
    minutes = 0;
  }
  modifyTime();
}

let getTimeValueAsString = (value) => {
  let secondsString = String(value);
  if(secondsString.length === 1){
    secondsString = '0' + secondsString;
  }
  return secondsString;
}

let modifyTime = () => {
  time.innerHTML=`${getTimeValueAsString(hours)}:${getTimeValueAsString(minutes)}:${getTimeValueAsString(seconds)}`;
}

let startTime = () => {
  if(!timerRunning){
    timerId = setInterval(setTime, 1);
    console.log(timerId);
    timerRunning = true;
  }
}

let stopTime = () => {
  timerRunning = false;
  console.log(timerId);
  clearInterval(timerId);
}

start.addEventListener('click', startTime);
stop.addEventListener('click', stopTime);
reset.addEventListener('click', resetTime);

