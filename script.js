let result = document.querySelector('#display');
function press(num_press){
    console.log(num_press)
    num_press = parseInt(num_press)
    result.innerText += num_press;
}
function clr(){
    result.innerText = "";
}

function setOP(operador){
    console.log(operador)
    result.innerText += operador
}

function calculate(calculo){
    calculo = result.innerText
    result.innerText = eval(calculo)
    console.log(eval(calculo))
}