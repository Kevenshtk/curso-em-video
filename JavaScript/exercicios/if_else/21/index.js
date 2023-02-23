var ope = 0
var valor = 0

function alcool(){
    ope = 1
}
function gaso(){
    ope = 2
}
function calc(){
    var litro = document.querySelector('#litro')
    var res = document.querySelector('#res')
    litro = Number(litro.value)

    if(ope == 0){
        alert('[ERRO] Preencha corretamente')
    } else {
        if(ope == 1){
        if(litro <= 20){
            valor = litro - 0.3
            res.innerText = `O valor a ser pago é $${valor}`
        } else if(litro > 20){
            valor = litro - 0.5
            res.innerText = `O valor a ser pago é $${valor}`
        }
    }

    if(ope == 2){
        if(litro <= 20){
            valor = litro - 0.4
            res.innerText = `O valor a ser pago é $${valor}`
        } else if(litro > 20){
            valor = litro - 0.6
            res.innerText = `O valor a ser pago é $${valor}`
        }
    }
    }
    
}