let display = document.querySelector('#result');

function appendToResult(value){
    display.value += value;
}

function clearResult(){
    display.value = "";
}
function calculateResult(){
    display.value = eval(display.value)
}