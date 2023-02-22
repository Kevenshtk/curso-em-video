function verificar(){
    var txtlado1 = document.querySelector('#txtlado1')
    var txtlado2 = document.querySelector('#txtlado2')
    var txtlado3 = document.querySelector('#txtlado3')
    var res = document.querySelector('#res')
    
    if(txtlado1.value.length == 0 || txtlado2.value.length == 0 || txtlado3.value.length == 0){
        alert('[ERRO] campo(s) vazio(s), preencha os campos corretamente.')
    } else {
        var lado1 = Number(txtlado1.value)
        var lado2 = Number(txtlado2.value)
        var lado3 = Number(txtlado3.value)
        if(lado1 == lado2 && lado1 == lado3){
            res.innerText = 'Triângulo Equilátero'
        } else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
            res.innerText = 'Triângulo Escaleno'
        } else {
            res.innerText = 'Triângulo Isósceles'
        }
    }
}