var txtvalor1 = document.querySelector('#txtvalor1')
var txtvalor2 = document.querySelector('#txtvalor2')
var txtvalor3 = document.querySelector('#txtvalor3')
var res = document.querySelector('#res')

function verificar(){
    var valor1 = Number(txtvalor1.value)
    if(valor1 == 0){
        alert('Primeiro valor igual a 0. Informe outro número, a equação não é do segundo grau.')
    }
}
function calc(){
    var valor1 = Number(txtvalor1.value)
    var valor2 = Number(txtvalor2.value)
    var valor3 = Number(txtvalor3.value)
    var delta = (valor2 **2) -4 * valor1 * valor3

    if(delta < 0){
        res.innerText = 'A equação não possui raízes reais.'
    } else if(delta == 0){
        res.innerText = ' A equação possui apenas uma raiz real.'
    } else {
        res.innerText = ' A equação possui duas raízes reais.'
    }
}