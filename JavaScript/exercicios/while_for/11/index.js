var pessoa = 7
var c = 1
var peso = 85
var quant = 0

var idade = 18
var media = 0 

while(c <= pessoa){
    if(peso >= 90){
        quant = quant + 1
    }
    media = media + idade
    c++
    peso++
    idade++
}

console.log(`São ${quant} pessoas com mais de 90 quilos.`)
console.log(`A média das idades das sete pessoas são ${media = media/pessoa}.`)