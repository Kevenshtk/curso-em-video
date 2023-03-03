function calc(){
    var num = document.querySelector('#txtnum')
    var conta = document.querySelector('#conta')
    var res = document.querySelector('#res')
    num = Number(num.value)
    var soma = 0
    for(var c = 1; c <= num; c++){
        var item = document.createElement('option')
        item.text = `1 / ${c}`
        conta.appendChild(item)
        var x = 1 / c
        soma = soma + x
    }
    res.innerHTML = `O resultado da soma é ${soma}`
}