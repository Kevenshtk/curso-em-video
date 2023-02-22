function calc(){
    var txtn1 = document.querySelector('#txtn1')
    var txtn2 = document.querySelector('#txtn2')
    var res = document.querySelector('#res')

    if(txtn1.value.length == 0 || txtn2.value.length == 0){
        alert('[ERRO] campo(s) vazio(s), preencha os campos corretamente.')
    } else {
        var nota1 = Number(txtn1.value)
        var nota2 = Number(txtn2.value)
        var media = (nota1 + nota2) / 2
        if(media > 0 && media <= 4){
            res.innerHTML = `Primeira nota ${nota1}, segunda nota ${nota2}, a média foi ${media},
            conceito correspondente: E, você foi <strong>REPROVADO</storng>.`
        } else if(media > 4 && media <= 6){
            res.innerHTML = `Primeira nota ${nota1}, segunda nota ${nota2}, a média foi ${media},
            conceito correspondente: D, você foi <strong>REPROVADO</storng>.`
        } else if(media > 6 && media <= 7.5){
            res.innerHTML = `Primeira nota ${nota1}, segunda nota ${nota2}, a média foi ${media},
            conceito correspondente: C, você foi <strong>REPROVADO</storng>.`
        } else if(media >7.5 && media <= 9){
            res.innerHTML = `Primeira nota ${nota1}, segunda nota ${nota2}, a média foi ${media},
            conceito correspondente: B, você foi <strong>APROVADO</storng>.`
        } else {
            res.innerHTML = `Primeira nota ${nota1}, segunda nota ${nota2}, a média foi ${media},
            conceito correspondente: A, você foi <strong>APROVADO</storng>.`
        }
    }
}