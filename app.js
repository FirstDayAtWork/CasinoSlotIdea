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

 numberOne.innerHTML = `<img src=\"Casinak Pics2/8.jpg\" width=\"130px\" height=\"130px\">`;
 numberTwo.innerHTML = `<img src=\"Casinak Pics2/5.jpg\" width=\"130px\" height=\"130px\">`;
 numberThree.innerHTML = `<img src=\"Casinak Pics2/2.jpg\" width=\"130px\" height=\"130px\">`;
 
//  `url('Casinak Pics/${firstNum}.jpg`;
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
        numberOne.innerHTML = `<img src=\"Casinak Pics2/${firstNum}.jpg\" width=\"130px\" height=\"130px\">`;
        numberTwo.innerHTML = `<img src=\"Casinak Pics2/${secondNum}.jpg\" width=\"130px\" height=\"130px\">`;
        numberThree.innerHTML = `<img src=\"Casinak Pics2/${thirdNum}.jpg\" width=\"130px\" height=\"130px\">`;
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
    let sumOfCasik = `${firstNum}${secondNum}${thirdNum}`;
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
                    if(sumOfCasik == basicW || sumOfCasik == basicW2 || sumOfCasik == basicW3
                        || sumOfCasik == basicW4 || sumOfCasik == basicW5 || sumOfCasik == basicW6
                        || sumOfCasik == basicW7 || sumOfCasik == basicW8 || sumOfCasik == basicW9
                        || sumOfCasik == specialW || sumOfCasik == specialW2 || sumOfCasik == jackpot){
                        playerBalance.innerText = `Balance :${playerThings.balance}`;
                        playerSpins.innerText = `SpinsOut :${playerThings.spins}`;  
                    } else {
                playerThings.balance -= playerThings.balance;
                playerThings.spins -= playerThings.spins;
                playerBalance.innerText = `Balance :${playerThings.balance}`;
                playerSpins.innerText = `SpinsOut :${playerThings.spins}`;            

                    console.log(playerThings.balance);
                    }
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
    let sumOfNumbers = `${firstNum}${secondNum}${thirdNum}`;
if(sumOfNumbers == jackpot){
    jackpotSound.play();
    playerThings.balance += 77777;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "JAck POT 777!";
} else if (sumOfNumbers == basicW){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 100 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 140$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 100 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 200$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 100 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 300$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 100;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
    } else {
    basicWinSound.play();
    playerThings.balance += 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 100$!";
    }
} else if (sumOfNumbers == basicW2){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 200 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 240$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 200 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 300$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 200 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 400$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
     } else {
    basicWinSound.play();
    playerThings.balance += 200;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 200$";
    }
} else if (sumOfNumbers == basicW3){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 300 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 340$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 300 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 400$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 300 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 500$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 300;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
     } else {
    basicWinSound.play();
    playerThings.balance += 300;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 300$";
     }
} else if (sumOfNumbers == basicW4){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 400 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 440$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 400 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 500$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 400 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 600$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 400;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
     } else {
    basicWinSound.play();
    playerThings.balance += 400;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 400$";
     }
} else if (sumOfNumbers == basicW5){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 500 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 540$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 500 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 600$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 500 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 700$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 500;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
     } else {
    basicWinSound.play();
    playerThings.balance += 500;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 500$";
     }
} else if (sumOfNumbers == basicW6){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 666 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 706$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 666 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 766$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 666 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 866$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 666;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
     } else {
    basicWinSound.play();
    playerThings.balance += 666;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "Ebat Ti Chert!";
     }
} else if (sumOfNumbers == basicW7){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 800 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 840$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 800 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 900$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 800 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 1000$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 800;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
     } else {
    basicWinSound.play();
    playerThings.balance += 800;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 800$";
     }
} else if (sumOfNumbers == basicW8){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 900 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 940$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 900 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 10000$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 800 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 1000$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 900;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
     } else {
    basicWinSound.play();
    playerThings.balance += 900;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 900$";
     }
} else if (sumOfNumbers == basicW9){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 1000 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 1040$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 1000 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 1100$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 1000 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 1200$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 1000;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
     } else {
    basicWinSound.play();
    playerThings.balance += 1000;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win! 1000$";
     }
} else if (sumOfNumbers == specialW){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 2000 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 2040$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 2000 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 2100$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 2000 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 2200$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 2000;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
     } else {
    basicWinSound.play();
    playerThings.balance += 2000;
    playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "$322$!";
     }
} else if (sumOfNumbers == specialW2){
    if(count == 1){
        basicWinSound.play();
        playerThings.balance += 1000 + 40;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 1040$!";
    } else if (count == 2){
        basicWinSound.play();
    playerThings.balance += 1000 + 100;
    playerThings.spins = Math.floor(playerThings.balance/10);
    outputText.innerText = "You Win 1100$!";
    } else if (count == 3){
        basicWinSound.play();
        playerThings.balance += 1000 + 200;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = "You Win 1200$!";
    } else if(count == 4){
        basicWinSound.play();
        playerThings.balance = playerThings.balance*2 + 1000;
        playerThings.spins = Math.floor(playerThings.balance/10);
        outputText.innerText = `You Win ${playerThings.balance}$`;
        console.log(playerThings.balance);
     } else {
    basicWinSound.play();
    playerThings.balance += 1000;
    playerThings.spins = Math.floor(playerThings.balance/10);
            outputText.innerText = "OYY EEaA +1000$!!";
     }
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



exitButton.addEventListener('click', () => {
    exitSound.play();
});

function saveMoneyToBalance(){
    if(+moneyValue.value <= 0 || +moneyValue.value > 999999){
        errorSoundTwo.play();
        return;
    } else {
        saveSound.play();
    playerThings.balance = +playerThings.balance + +moneyValue.value;
    playerThings.spins = Math.floor(playerThings.balance/10);
    // playerSpins.innerText += playerThings.spins;
    // if(playerThings.balance > 0){
        startButton.addEventListener('click', findEqualNumbers);
    // }
   console.log(playerThings.spins) ;
   playerBalance.innerText = `Balance :${playerThings.balance}`;
    playerSpins.innerText = `SpinsOut :${playerThings.spins}`;
    }
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





