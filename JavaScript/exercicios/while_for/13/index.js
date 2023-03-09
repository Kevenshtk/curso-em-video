var op = 0

while(op != 0){

    // Média aritmética
    if(op == 1){
        var n1 = 10
        var n2 = 10
        var res = (n1 + n2)/2
        console.log('A média aritmética é ' +res)
    }

    // Média ponderada
    if(op == 2){
        var n1 = 10
        var n2 = 10
        var n3 = 10
        var peso1 = 1
        var peso2 = 1
        var peso3 = 2
        var resp = peso1 + peso2 + peso3
        var resn = n1 + n2 + n3
        var mp = resn/ resp
        console.log(`A média ponderada é ` +mp)
    }    
}

console.log('Programa encerrado.')