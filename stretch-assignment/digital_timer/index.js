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

//Functions

//start the timer
function start(){
  isRunning = true;
  keepTime = setInterval(timer, 10);
  startBtn.style.display='none';
  pauseBtn.style.display='inline-block';

}

//keep track of the digits so they display correctly
function updateDigits(){
  digits[0].textContent = secondTens.toString();
  digits[1].textContent = secondOnes.toString();
  digits[3].textContent = msTens.toString();
  digits[4].textContent = msHundreds.toString();
}

function timer(){
  if(secondTens===1){
    clearInterval(keepTime);
    digits.forEach(dig=>dig.style.color='red');
    digits[2].style.color='black';
    pauseBtn.style.display='none';
  } else{
    addMsHundreds();
  }
  updateDigits();
}

//Add numbers to the digits for updating
function addMsHundreds(){
  msHundreds++;
  if(msHundreds>9){
    msHundreds = 0;
    addMsTens();
  }
}
function addMsTens(){
  msTens++;
  if(msTens>9){
    msTens = 0;
    addSecOnes();
  }

}
function addSecOnes(){
  secondOnes++;
  if(secondOnes>9){
    secondOnes = 0;
    addSecTen();
  }
}
function addSecTen(){
  secondTens++;
}

//pause and resume the timer
function pause(){
  if(isRunning){
    clearInterval(keepTime);
    pauseBtn.textContent="RESUME";
  }else{
    keepTime = setInterval(timer, 10);
    pauseBtn.textContent="PAUSE";
  }
  isRunning = !isRunning;
}

//reset back to 0
function reset(){
  clearInterval(keepTime);
  secondTens= 0;
  secondOnes= 0;
  msHundreds= 0;
  msTens= 0;
  digits.forEach(dig=>dig.style.color='black');
  updateDigits();
  startBtn.style.display='inline-block';
  pauseBtn.style.display='none';
}