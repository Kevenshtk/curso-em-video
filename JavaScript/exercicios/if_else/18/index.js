function verificar(){
    var num = document.querySelector('#num')
    var res = document.querySelector('#res')
    num = Number(num.value)
    num = num % 2
    
    if(num == 0){
        res.innerText = 'O número é par.'
    } else {
        res.innerText = 'O número é ímpar.'
    }
}