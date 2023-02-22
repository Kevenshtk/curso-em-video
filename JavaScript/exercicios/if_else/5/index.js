function calc(){
    var num1 = document.querySelector('#txtnum1')
    var n1 = Number(num1.value)
    var num2 = document.querySelector('#txtnum2')
    var n2 = Number(num2.value)
    var res = document.querySelector('.res')
    var n3 = (n1 + n2)/ 2
    
    if(n3 >= 7 && n3 < 10){
        res.innerHTML = '<strong>Aprovado</strong>'
        res.style.color = 'green'
    } else if(n3 == 10){
        res.innerHTML = '<strong>Aprovado com Distinção</strong>'
        res.style.color = 'green'
    } else{
        res.innerHTML = '<strong>Reprovado</strong>'
        res.style.color = 'red'
    }
}