let displayInput = document.querySelector('.display > .input');
let displayOutput = document.querySelector('.display > .output');
let numBtns = document.querySelectorAll('.number');
let operatorBtns = document.querySelectorAll('.plus, .divide, .multiply');
let minusBtn = document.querySelector('.sub');
let decimalBtn = document.querySelector('.dot');
let piBtn = document.querySelector('.pi');
let ACBtn = document.querySelector('.AC');
let delBtn = document.querySelector('.C');
let enterBtn = document.querySelector('.equalTo');
let sumTransferCheck = 0;

let keySound = new Audio('Sound/click-button-140881.mp3');

numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', ()=>{
        numberInp(numBtn.innerHTML);
    });
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', ()=>{
        operatorInp(operatorBtn.innerHTML);
    });
});

piBtn.addEventListener('click', ()=>{
    exp += '3.14';
    displayInput.innerHTML = exp;
    stopAudio();
    keySound.play();
});

minusBtn.addEventListener('click', ()=>{
    minusInp(minusBtn.innerHTML);
});

delBtn.addEventListener('click', ()=>{
    delInp();
});

decimalBtn.addEventListener('click', ()=>{
    decimalInp();
});

ACBtn.addEventListener('click', ()=>{
    ACInp();
});

enterBtn.addEventListener('click', ()=>{
    enterInp();
});

window.addEventListener('keydown', (evt)=>{
    if(evt.key >= 0 && evt.key <=9){
        numberInp(evt.key);
    }
    if(evt.key == '.'){
        decimalInp();
    }
    if(operators.test(evt.key)){
        operatorInp(evt.key);
    }
    if(evt.key == '*'){
        operatorInp('X');
    }
    if(evt.key == '-'){
        minusInp('-');
    }
    if(evt.key == 'Backspace'){
        delInp();
    }
    if(evt.key == 'Delete'){
        ACInp();
    }
    if(evt.key == 'Enter'){
        enterInp();
    }
});

function numberInp(elem){
    exp += elem;
    displayInput.innerHTML = exp;
    stopAudio();
    keySound.play();
}

function operatorInp(elem){
    
    if(!isNaN(exp[exp.length - 1])){
        exp += elem;
        displayInput.innerHTML = exp;
    }
    if(sumTransferCheck){
        exp = `${sum}${elem}`;
        displayInput.innerHTML = exp;
        sumTransferCheck = 0;
    }
    stopAudio();
    keySound.play();
}

function minusInp(elem){
    if(exp == '' || exp[exp.length - 1] == 'X' || exp[exp.length - 1] == '/' || !isNaN(exp[exp.length - 1])){
        exp += elem;
        displayInput.innerHTML = exp;
    }
    if(sumTransferCheck){
        exp = `${sum}${elem}`;
        displayInput.innerHTML = exp;
        sumTransferCheck = 0;
    }
    stopAudio();
    keySound.play();
}

function delInp(){
    exp = exp.slice(0, exp.length - 1)
    displayInput.innerHTML = exp;
    sumTransferCheck = 0;
    stopAudio();
    keySound.play();
}

function decimalInp(){
    if(!isNaN(exp[exp.length - 1])){
        exp += decimalBtn.innerHTML;
        displayInput.innerHTML = exp;
    }
    stopAudio();
    keySound.play();
}

function ACInp(){
    exp = '';
    operatorToggle = 0;
    displayInput.innerHTML = exp;
    displayOutput.innerHTML = '';
    sum = 0;
    sumTransferCheck = 0;
    stopAudio();
    keySound.play();
}

function enterInp(){
    exp += '=';
    makeArray();
    operate(arr);
    displayOutput.innerHTML = sum;
    exp = exp.slice(0, exp.length - 1);
    sumTransferCheck = 1;
    operatorCount = 0;
    stopAudio();
    keySound.play();
}

function stopAudio(){
    keySound.pause();
    keySound.currentTime = 0;
}