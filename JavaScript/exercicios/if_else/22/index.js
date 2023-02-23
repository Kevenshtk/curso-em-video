function calc(){
    var raio = document.querySelector('#raio')
    var res = document.querySelector('#res')

    if(raio.value.length == 0){
        alert('[ERRO] Preencha o campo !')
    } else {
        raio = Number(raio.value)
        var d = 2 * raio
        var c = (2 * 3.14 ) * 5
        var a = 3.14 * raio**2
        res.innerText = `O diâmetro é ${d}, o comprimento é ${c.toFixed(2).replace('.', ',')}, a área é ${a}.` 
    }
}