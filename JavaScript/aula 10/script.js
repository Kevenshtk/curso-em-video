let num = document.querySelector('#txtnum')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function add(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let i = document.createElement('option')
        i.text = `Valor ${num.value} adicionado.`
        lista.appendChild(i)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encotrado na lista.')
    }
    num.value = ''
    num.focus()
}

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function fin(){
    if( valores.length == 0){
        alert('Adicione valores antes de finalizar.')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(pos in valores){
            soma += valores[pos]
            media = soma / total
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }

        res.innerHTML = ''
        res.innerHTML += '<p>Ao todo,  são '+total+' números cadastradas.</p>'
        res.innerHTML += `<p>O menor valor foi ${menor}, o maior valor foi ${maior}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média da soma dos valores são ${media}.</p>`
    }
}