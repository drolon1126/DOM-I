//Initialize values
let secondTens= 0;
let secondOnes= 0;
let msHundreds= 0;
let msTens= 0;
let isRunning = false;

//create selectors and make some buttons to add that will control the timer

let digits = document.querySelectorAll('.digit');
let body = document.querySelector('body');
body.style.display='flex';
body.style.flexDirection='column';

let startBtn = document.createElement('BUTTON');
startBtn.textContent='START';
startBtn.onclick=start;
startBtn.style.marginTop='20px';

let pauseBtn = document.createElement('BUTTON');
pauseBtn.textContent='PAUSE';
pauseBtn.onclick=pause;
pauseBtn.style.display='none';
pauseBtn.style.marginTop='20px';

let resetBtn = document.createElement('BUTTON');
resetBtn.textContent='RESET';
resetBtn.onclick=reset;
resetBtn.style.marginTop='20px';


body.appendChild(pauseBtn);
body.appendChild(startBtn);
body.appendChild(resetBtn);

let keepTime;