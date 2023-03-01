function calc(){
    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2') 
    var res = document.querySelector('#res') 
    n1 = Number(n1.value)
    n2 = Number(n2.value)
    var x = n2
    var y = n1
    res.innerText = `Valor de x = ${x}  e valor de y = ${y}.`
}