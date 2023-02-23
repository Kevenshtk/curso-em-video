var num1 = document.querySelector('#num1')
var num2 = document.querySelector('#num2')
var res = document.querySelector('#res')
var ope = 0

function op1(){
    ope = 1
}

function op2(){
    ope = 2
}

function calc(){
    num1 = Number(num1.value)
    num2 = Number(num2.value)

    if(ope == 0){
        alert('[ERRO] Preencha corretamente')
    } else {
        if(ope == 1){
        num1 = num1 % 2
        num2 = num2 % 2
        if(num1 == 0 && num2 == 0){
            res.innerText = 'Os números são pares.'
        } else if(num1 == 0 && num2 != 0){
            res.innerText = 'O primeiro número é par e o segundo é ímpar.'
        } else if(num1 != 0 && num2 == 0){
            res.innerText = 'O segundo número é par e o primeiro é ímpar.'
        } else {
            res.innerText = 'Os números são ímpares.'
        }
    }  
        if(ope == 2){
        if(num1 < 0 && num2 < 0){
            res.innerText = 'Os números são negativos.'
        } else if(num1 >= 0 && num2 < 0){
            res.innerText = 'O primeiro números é positivo e o segundo é negativo.'
        } else if(num1 < 0 && num2 >= 0){
            res.innerText = 'O primeiro números é negativo e o segundo é positivo.'
        } else {
            res.innerText = 'Os números são positivos.'
        }
    } 
}
}