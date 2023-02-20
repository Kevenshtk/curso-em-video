function contar(){
    var inicio = document.querySelector('#txtinicio')
    var fim = document.querySelector('#txtfim')
    var passo = document.querySelector('#txtpasso')
    var res = document.querySelector('#res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        if(passo <= 0){
            alert('Passo inválido! Cosiderando PASSO 1')
            passo = 1
        }
        if(inicio < fim){
            // Contagem crescente
            for (let c = inicio; c <= fim; c += passo) {
           res.innerHTML += `${c} \u{1F449}` 
            }
        } else {
            // Contagem regressiva
            for(let c = inicio; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}