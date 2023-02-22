function calc(){
    var txtVhora = document.querySelector('#txtVhora')
    var txtQantHora = document.querySelector('#txtQantHora')
    var res = document.querySelector('#res')
    var vhora = Number(txtVhora.value)
    var qhora = Number(txtQantHora.value)
    var salarioB = vhora * qhora
    var valorIr = 0
    var valorInss = 0 
    var valorFgts = 0
    var totalDes = 0
    var salarioL = 0

    if(salarioB <= 900){
        valorInss = salarioB * 0.10
        valorFgts = salarioB * 0.11
        totalDes = valorIr + valorInss
        salarioL = salarioB - totalDes
        res.innerHTML = `<p>Salário bruto (${vhora}*${qhora}) : R$${salarioB.toFixed(2).replace('.', ',')}</p>
        <p>(-) IR  : Isento</p>
        <p>(-) INSS (10%) : R$ ${valorInss.toFixed(2).replace('.', ',')}</p>
        <p>FGTS (11%) :R$ ${valorFgts.toFixed(2).replace('.', ',')}</p>
        <p>Total de descontos :R$ ${totalDes.toFixed(2).replace('.', ',')}</p>
        <p>Salário Líquido :R$ ${salarioL.toFixed(2).replace('.', ',')}</p>`

    } else if(salarioB > 900 && salarioB <= 1500){
        valorIr = salarioB * 0.05
        valorInss = salarioB * 0.10
        valorFgts = salarioB * 0.11
        totalDes = valorIr + valorInss
        salarioL = salarioB - totalDes
        res.innerHTML = `<p>Salário bruto (${vhora}*${qhora}) : R$ ${salarioB.toFixed(2).replace('.', ',')}</p>
        <p>(-) IR (5%) :R$ ${valorIr.toFixed(2).replace('.', ',')}</p>
        <p>(-) INSS (10%) : R$ ${valorInss.toFixed(2).replace('.', ',')}</p>
        <p>FGTS (11%) :R$ ${valorFgts.toFixed(2).replace('.', ',')}</p>
        <p>Total de descontos :R$ ${totalDes.toFixed(2).replace('.', ',')}</p>
        <p>Salário Líquido :R$ ${salarioL.toFixed(2).replace('.', ',')}</p>`

    } else if(salarioB > 1500 && salarioB <= 2500){
        valorIr = salarioB * 0.10
        valorInss = salarioB * 0.10
        valorFgts = salarioB * 0.11
        totalDes = valorIr + valorInss
        salarioL = salarioB - totalDes
        res.innerHTML = `<p>Salário bruto (${vhora}*${qhora}) : R$ ${salarioB.toFixed(2).replace('.', ',')}</p>
        <p>(-) IR (10%) :R$ ${valorIr.toFixed(2).replace('.', ',')}</p>
        <p>(-) INSS (10%) : R$ ${valorInss.toFixed(2).replace('.', ',')}</p>
        <p>FGTS (11%) :R$ ${valorFgts.toFixed(2).replace('.', ',')}</p>
        <p>Total de descontos :R$ ${totalDes.toFixed(2).replace('.', ',')}</p>
        <p>Salário Líquido :R$ ${salarioL.toFixed(2).replace('.', ',')}</p>`

    } else{
        valorIr = salarioB * 0.20
        valorInss = salarioB * 0.10
        valorFgts = salarioB * 0.11
        totalDes = valorIr + valorInss
        salarioL = salarioB - totalDes
        res.innerHTML = `<p>Salário bruto (${vhora}*${qhora}) : R$ ${salarioB.toFixed(2).replace('.', ',')}</p>
        <p>(-) IR (20%) :R$ ${valorIr.toFixed(2).replace('.', ',')}</p>
        <p>(-) INSS (10%) : R$ ${valorInss.toFixed(2).replace('.', ',')}</p>
        <p>FGTS (11%) :R$ ${valorFgts.toFixed(2).replace('.', ',')}</p>
        <p>Total de descontos :R$ ${totalDes.toFixed(2).replace('.', ',')}</p>
        <p>Salário Líquido :R$ ${salarioL.toFixed(2).replace('.', ',')}</p>`
    }
}