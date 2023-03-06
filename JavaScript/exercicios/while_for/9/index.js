var num = 10
var resto = 0
var numUsuario = num

for(var c = 1; c <= numUsuario; c++){
    resto = num % 2
    if(resto == 0){
        console.log(`O ${num} é par`)
    } else {
        console.log(`O ${num} é ímpar`)
    }
    num--
}