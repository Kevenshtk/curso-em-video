var num = 0
var cont = 1
var quant = 0

while(cont <= 10){
    if(num >= 30 && num <= 90){
    quant = quant + 1
    }
    num++
    num = num + 20
    cont++
}

console.log(`A quantidade de números entre 30 e 90 é ${quant}.`)