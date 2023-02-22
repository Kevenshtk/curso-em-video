function calc(){
    var txtano = document.querySelector('#txtano')
    var res = document.getElementById('res')

    if(txtano.value == 0 || txtano.value.length == 1 || txtano.value.length == 2 || txtano.value.length == 3 ){
        alert('Preencha o campo corretamente.')
    } else {
        var ano = Number(txtano.value)
        var calc = ano % 4
        if(calc == 0){
            calc = ano % 100
            if(calc != 0){
                res.innerText = 'O ano é bissexto.'
            }
        } else {
            calc = ano % 400
            if(calc == 0){
                res.innerText = 'O ano é bissexto.'
            } else {
                res.innerText = 'O ano não é bissexto.'
            }
        } 
    }
}