function calc(){
    var txtsalario = document.querySelector('#txtsalario')
    var res = document.querySelector('#res')
    var salarioAtual = Number(txtsalario.value)
    var aumento = 0
    var salarioNovo = 0

    if(salarioAtual <= 280){
        salarioNovo = (salarioAtual * 0.2) + salarioAtual
        aumento = salarioNovo - salarioAtual
        res.innerHTML = 
        `<p>Seu salário antes do reajuste: $${salarioAtual}</p>
        <p>O percentual de aumento aplicado foi de: 20%</p> <p>O aumento foi de: $${aumento.toFixed(2)}</p>
        <p>Seu salário passou a ser de: $${salarioNovo}</p>`

    } else if(salarioAtual > 280 && salarioAtual <= 700){
        salarioNovo = (salarioAtual * 0.15) + salarioAtual
        aumento = salarioNovo - salarioAtual
        res.innerHTML = 
        `<p>Seu salário antes do reajuste: $${salarioAtual}</p>
        <p>O percentual de aumento aplicado foi de: 15%</p> <p>O aumento foi de: $${aumento.toFixed(2)}</p>
        <p>Seu salário passou a ser de: $${salarioNovo}</p>`

    } else if(salarioAtual > 700 && salarioAtual < 1500){
        salarioNovo = (salarioAtual * 0.1) + salarioAtual
        aumento = salarioNovo - salarioAtual
        res.innerHTML = 
        `<p>Seu salário antes do reajuste: $${salarioAtual}</p>
        <p>O percentual de aumento aplicado foi de: 10%</p> <p>O aumento foi de: $${aumento.toFixed(2)}</p>
        <p>Seu salário passou a ser de: $${salarioNovo}</p>`

    } else {
        salarioNovo = (salarioAtual * 0.05) + salarioAtual
        aumento = salarioNovo - salarioAtual
        res.innerHTML = 
        `<p>Seu salário antes do reajuste: $${salarioAtual}</p>
        <p>O percentual de aumento aplicado foi de: 5%</p> <p>O aumento foi de: $${aumento.toFixed(2)}</p>
        <p>Seu salário passou a ser de: $${salarioNovo}</p>`
    }
}