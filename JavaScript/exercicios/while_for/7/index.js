var idade = 16
var maior = 0

for(var c = 1; c < 11; c++){
    if(idade >= 18){
        maior = maior + 1
    }
    idade = idade + 1
}
console.log(`São ${maior} pessoas com mais de 18 anos.`)