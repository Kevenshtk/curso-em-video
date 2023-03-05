/*
    Faixa etária
Até 15 anos
De 16 a 30 anos
De 31 a 45 anos
De 46 a 60 anos
Acima de 61 anos
*/

var idade = 15
var c = 1
var faixa1 = 0
var faixa2 = 0
var faixa3 = 0
var faixa4 = 0
var faixa5 = 0

while(c <= 15){
    if(idade <= 15){
        faixa1 = faixa1 + 1

    } else if(idade >= 16 && idade <= 30){
        faixa2 = faixa2 + 1

    } else if(idade >= 31 && idade <= 45){
        faixa3 = faixa3 + 1

    } else if(idade >= 46 && idade <= 60){
        faixa4 = faixa4 + 1

    } else if(idade >= 61){
        faixa5 = faixa5 + 1
    }
    idade = idade + 4
    c++
}

console.log(`São ${faixa1} pessoas até 15 anos;`)
console.log(`São ${faixa2} pessoas de 16 a 30 anos;`)
console.log(`São ${faixa3} pessoas de 31 a 45 anos;`)
console.log(`São ${faixa4} pessoas de 46 a 60 anos;`)
console.log(`São ${faixa5} pessoas acima de 61 anos.`)