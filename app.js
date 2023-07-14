const numberOne = document.getElementById('fir');
const numberTwo = document.getElementById('two');
const numberThree = document.getElementById('three');
const startButton = document.getElementById('startbtn');
const resetButton = document.getElementById('resetbtn');
const infoButton = document.getElementById('infobtn');
const timee = document.querySelector('.watch .time');
const outputText = document.getElementById('output');
const playerBalance = document.getElementById('balance');
const playerSpins = document.getElementById('spinsout');
const playerStawka = document.getElementById('stawka');
const addMoney = document.getElementById('addmoney');
const overLay = document.getElementById("overlay");
const plusBet = document.getElementById('plusbet');
const minusBet = document.getElementById('minusbet');
const currentBalance = document.getElementById('curr-balance');
const moneyValue = document.getElementById('m-value');
const saveButton = document.getElementById('savebtn');
const exitButton = document.getElementById('exitbtn');

let spinSound = new Audio("Casinak Sounds/Spin sound.wav");
let resetSound = new Audio("Casinak Sounds/Reset.wav");
let infoSound = new Audio("Casinak Sounds/Info.wav");
let betSound = new Audio("Casinak Sounds/BetPlus&Minus.wav");
let saveSound = new Audio("Casinak Sounds/SaveSound.wav");
let exitSound = new Audio("Casinak Sounds/Exit.wav");
let jackpotSound = new Audio("Casinak Sounds/Spin sound.wav");
let basicWinSound = new Audio("Casinak Sounds/BasicWin.wav");
let errorSoundOne = new Audio("Casinak Sounds/ErrorOne.wav");
let errorSoundTwo = new Audio("Casinak Sounds/ErrorTwo.wav");

// show info  /////////////////////////////////////////
infoButton.addEventListener('click', showInfo);
infoButton.addEventListener('blur', showInfo);




function showInfo(){
    infoSound.play();
    if (overLay.style.display === 'block'){
        overLay.style.display = 'none';
    } else {
        overLay.style.display = 'block';
    }
}

///////////////////////////////////////

startButton.addEventListener('click', findEqualNumbers);
resetButton.addEventListener('click', () => {
    resetSound.play();
    startButton.addEventListener('click', findEqualNumbers);
    ResetStart();
    clearTimeout(firstInt);
    outputText.innerText = "";
    firstNum = 0;
    secondNum = 0;
    thirdNum = 0;
    numberOne.innerHTML = 0;
    numberTwo.innerHTML = 0;
    numberThree.innerHTML = 0;
})

function ResetStart(){
    if(playerThings.balance >= 10 && count == 0){
        spinSound.volume = 1;
        startButton.disabled = false;
        console.log(playerThings.balance);
    } else if (playerThings.balance >= 20 && count == 1){
        spinSound.volume = 1;
        startButton.disabled = false;
        console.log(playerThings.balance);
    } else if (playerThings.balance >= 50 && count == 2){
        spinSound.volume = 1;
        startButton.disabled = false;
        console.log(playerThings.balance);
    } else if(playerThings.balance >= 100 && count == 3){
        spinSound.volume = 1;
        startButton.disabled = false;
        console.log(playerThings.balance);
    
    } else if(playerThings.balance >= 10 && count == 4){
        spinSound.volume = 1;
        startButton.disabled = false;
        console.log(playerThings.balance);
    }
}

let firstNum; 
let secondNum;
let thirdNum;


function findEqualNumbers(){
    spinSound.play();
    firstInt = setInterval(generetePass, 10);
    balanceInandOut();
 }


function generetePass(){
    
    outputText.innerText = "";
    startButton.removeEventListener('click', findEqualNumbers);
    checkBet();
   if(seconds == 2){
        stopGeneration();
        // stop();
        reset();
        slotLogic();
        console.log('logic1')
    } else {
        startButton.addEventListener('click', start);
        firstNum = Math.floor(Math.random() * 9) + 1;
        secondNum = Math.floor(Math.random() * 9) + 1;
        thirdNum = Math.floor(Math.random() * 9) + 1;
        numberOne.innerHTML = firstNum;
        numberTwo.innerHTML = secondNum;
        numberThree.innerHTML = thirdNum;
        console.log('logic2')
    } 
    if(playerThings.balance == 0 && playerThings.spins == 0){
        startButton.disabled = true;
        stopGeneration();
        stop();
        startButton.removeEventListener('click', start);
        outputText.innerText = "OUT of MONEY!";
    }
}


function stopGeneration(){
    clearTimeout(firstInt);
    
}


///////////////////////// bet ///////////////////


const betX = [1, 2, 5, 10, 'max'];

playerStawka.innerText += betX[0];

plusBet.addEventListener('click', increaseBet);
minusBet.addEventListener('click', decreaseBet);

let count = betX[0]-1;
console.log(count);
function increaseBet() {
    betSound.play();
    // console.log(count);
  switch (count) {
    case 0:
        count++;
        playerStawka.innerText = `Bet :${betX[count]}`;
        break;
  case 1:
    count++;
    playerStawka.innerText = `Bet :${betX[count]}`;
    break;

    case 2:
        count++;
        playerStawka.innerText = `Bet :${betX[count]}`;
        break;

    case 3:
        count++;
        playerStawka.innerText = `Bet :${betX[count]}`;
        break;

    case 4:
        return;
        
        break;

    default: console.log('eto defaul detka');
        break;
  }
}
console.log(count);
// let decount = betX[count]-1;
// console.log(decount)
function decreaseBet(){
    betSound.play(); 
    // console.log(count);
    switch (count) {
        case 0:
            break;
      case 1:
        count--;
        playerStawka.innerText = `Bet :${betX[count]}`;
        break;
    
        case 2:
            count--;
            playerStawka.innerText = `Bet :${betX[count]}`;
            break;
    
        case 3:
            count--;
            playerStawka.innerText = `Bet :${betX[count]}`;
            break;
    
        case 4:
            count--;
            playerStawka.innerText = `Bet :${betX[count]}`;
            break;
        case 5:
            playerStawka.innerText = `Bet :${betX[count]}`;
            break;
    
        default: console.log('eto defaul detka 2');
            break;
      }
}





//////////////// SLOT LOGIC /////////////////
let playerThings = {
    balance : 100,
    spins : 2
}

playerThings.spins = Math.floor(playerThings.balance/10);
// 1 spin = 10$
playerBalance.innerText += playerThings.balance;
playerSpins.innerText += playerThings.spins;


// + & -
function balanceInandOut(){
    checkBet();
  bal = setTimeout(() => {
        
        if(playerThings.balance > 0 && playerThings.spins > 0 && count == 0){
            if(playerThings.balance < 10 && count == 0){
                return;
            } else {
            playerThings.balance -= 10;
            playerThings.spins--;
            playerBalance.innerText = `Balance :${playerThings.balance}`;
            playerSpins.innerText = `SpinsOut :${playerThings.spins}`;
            }
        } else if (playerThings.balance > 0 && playerThings.spins > 0
             && count == 1){
                if(playerThings.balance < 20 && count == 1){
                    return;
                } else {
                playerThings.balance -= 20;
                playerThings.spins -= 2;
                playerBalance.innerText = `Balance :${playerThings.balance}`;
                playerSpins.innerText = `SpinsOut :${playerThings.spins}`;
                }
        }   else if (playerThings.balance > 0 && playerThings.spins > 0
            && count == 2){
                if(playerThings.balance < 50 && count == 2){
                    console.log(playerThings.balance);
                    return;
                } else {
                playerThings.balance -= 50;
                playerThings.spins -= 5;
                playerBalance.innerText = `Balance :${playerThings.balance}`;
                playerSpins.innerText = `SpinsOut :${playerThings.spins}`;
            }
        }   else if (playerThings.balance > 0 && playerThings.spins > 0
                && count == 3){
                    if(playerThings.balance < 100 && count == 3){
                        return;
                    } else {
                playerThings.balance -= 100;
                playerThings.spins -= 10;
                playerBalance.innerText = `Balance :${playerThings.balance}`;
                playerSpins.innerText = `SpinsOut :${playerThings.spins}`;
                    }
            }   else if (playerThings.balance > 0 && playerThings.spins > 0
                && count == 4){
                playerThings.balance -= playerThings.balance;
                playerThings.spins -= playerThings.spins;
                playerBalance.innerText = `Balance :${playerThings.balance}`;
                playerSpins.innerText = `SpinsOut :${playerThings.spins}`;            


              } else if (playerThings.balance == 0 && playerThings.spins == 0){
            // startButton.removeEventListener('click', findEqualNumbers);
            //  outputText.innerText = "U HAVE NO MONEY!!";
            console.log('no money bruh');
        } 
    }, 2200);
    
    
}

function checkBet(){
    if(playerThings.balance < 10 && count == 0){
        spinSound.volume = 0;
        errorSoundOne.play();
        stopGeneration();
        reset();
        startButton.disabled = true;
                console.log('NADO ESHE DENEG');
                return;
    } else if(playerThings.balance < 20 && count == 1){
        spinSound.volume = 0;
        errorSoundOne.play();
        stopGeneration();
        reset();
        startButton.disabled = true;
                console.log('NADO ESHE DENEG');
                return;
    } else if(playerThings.balance < 50 && count == 2){
        spinSound.volume = 0;
        errorSoundOne.play();
        stopGeneration();
        reset();
        startButton.disabled = true;
                console.log('NADO ESHE DENEG');
                return;
    } else if(playerThings.balance < 100 && count == 3){
        spinSound.volume = 0;
        errorSoundOne.play();
        stopGeneration();
        reset();
        startButton.disabled = true;
                console.log('NADO ESHE DENEG');
                return;
    } else if (playerThings.balance == 0 && count == 4){
        spinSound.volume = 0;
        errorSoundOne.play();
        stopGeneration();
        reset();
        startButton.disabled = true;
                console.log('NADO ESHE DENEG');
                return;

    }
}


// win conditions
const jackpot = 777;
const basicW = 111;
const basicW2 = 222;
const basicW3 = 333;
const basicW4 = 444;
const basicW5 = 555;
const basicW6 = 666;
const basicW7 = 888;
const basicW8 = 999;
const basicW9 = 911;
const specialW = 322;
const specialW2 = 228;


document.getElementById('text').innerHTML = `
${jackpot} = 77777$
<br>
${basicW} = 100$
<br>
${basicW2} = 200$
<br>
${basicW3} = 300$
<br>
${basicW4} = 400$
<br>
${basicW5} = 500$
<br>
${basicW6} = 666$
<br>
${basicW7} = 800$
<br>
${basicW8} = 900$
<br>
${basicW9} = 1000$
<br>
${specialW} = 2000$
<br>
${specialW2} = 1000$
<p/>`

function slotLogic(){
if(`${firstNum}${secondNum}${thirdNum}` == jackpot){
    jackpotSound.play();
    playerThings.balance += 77777;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "JAck POT 777!";
} else if (`${firstNum}${secondNum}${thirdNum}` == basicW){
    basicWinSound.play();
    playerThings.balance += 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 100$!";
} else if (`${firstNum}${secondNum}${thirdNum}` == basicW2){
    basicWinSound.play();
    playerThings.balance += 200;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 200$";
} else if (`${firstNum}${secondNum}${thirdNum}` == basicW3){
    basicWinSound.play();
    playerThings.balance += 300;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 300$";
} else if (`${firstNum}${secondNum}${thirdNum}` == basicW4){
    basicWinSound.play();
    playerThings.balance += 400;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 400$";
} else if (`${firstNum}${secondNum}${thirdNum}` == basicW5){
    basicWinSound.play();
    playerThings.balance += 500;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 500$";
} else if (`${firstNum}${secondNum}${thirdNum}` == basicW6){
    basicWinSound.play();
    playerThings.balance += 666;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "Ebat Ti Chert!";
} else if (`${firstNum}${secondNum}${thirdNum}` == basicW7){
    basicWinSound.play();
    playerThings.balance += 800;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 800$";
} else if (`${firstNum}${secondNum}${thirdNum}` == basicW8){
    basicWinSound.play();
    playerThings.balance += 900;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 900$";
} else if (`${firstNum}${secondNum}${thirdNum}` == basicW9){
    basicWinSound.play();
    playerThings.balance += 1000;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 1000$";
} else if (`${firstNum}${secondNum}${thirdNum}` == specialW){
    basicWinSound.play();
    playerThings.balance += 2000;
    playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "$322$!";
} else if (`${firstNum}${secondNum}${thirdNum}` == specialW2){
    basicWinSound.play();
    playerThings.balance += 1000;
    playerThings.spins = Math.floor(playerThings.balance/10);
            outputText.innerText = "OYY EEaA +1000$!!";
} else {
    outputText.innerText = "=(";
}


}

// add MONEY ///////////////
const modal = document.getElementById("myModal");
addMoney.addEventListener('click', showPopUp);

addMoney.addEventListener('click', () => {
infoSound.play();
});

function showPopUp(){
    modal.style.display = 'block';
    currentBalance.innerText = `Balance: ${playerThings.balance}`;
    moneyValue.value = '';
}


// moneyValue.addEventListener('input', mValue);


// function mValue(e){
//     moneyValue.value = e.target.value;
// }

saveButton.addEventListener('click', saveMoneyToBalance);
exitButton.addEventListener('click', exitPopUp);

saveButton.addEventListener('click', () => {
saveSound.play();
});

exitButton.addEventListener('click', () => {
    exitSound.play();
});

function saveMoneyToBalance(){
    playerThings.balance = +playerThings.balance + +moneyValue.value;
    playerThings.spins = Math.floor(playerThings.balance/10);
    // playerSpins.innerText += playerThings.spins;
    // if(playerThings.balance > 0){
        startButton.addEventListener('click', findEqualNumbers);
    // }
   console.log(playerThings.spins) ;
   playerBalance.innerText = `Balance :${playerThings.balance}`;
    playerSpins.innerText = `SpinsOut :${playerThings.spins}`;
   if(playerThings.balance >= 10){
    spinSound.volume = 1;
    startButton.disabled = false;
   }
    exitPopUp();

    // console.log(playerThings.balance);
    // console.log(typeof moneyValue.value);
}

function exitPopUp(){
    modal.style.display = 'none';
}

currentBalance.innerText += `${playerThings.balance}`;


/////////////// TIMER ///////////////


startButton.addEventListener('click', start);
resetButton.addEventListener('click', reset);

let seconds = 0;
let interval = null;

// quick math

function timer () {
    seconds++;


    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
    
    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;
    
    

    timee.innerText = `${hrs}:${mins}:${secs}`;
}


// кнопка старт
function start () {
    if (interval) {
        return
    }

    interval = setInterval(timer, 1000);
}

// кнопка стоп / ресет
function stop () {
    clearInterval(interval);
    interval = null;
}

function reset () {
    startButton.addEventListener('click', findEqualNumbers);
    clearTimeout(firstInt);
    stop();
    seconds = 0;
    timee.innerText = '00:00:00';
}





