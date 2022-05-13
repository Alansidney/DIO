var  currentNumWrapper= document.getElementById('currentNum');
var currentNum = 0;

function increment(){
    currentNum = currentNum + 1;
    currentNumWrapper.innerHTML = currentNum;
}

function decrement(){
    currentNum = currentNum - 1;
    currentNumWrapper.innerHTML = currentNum;
}