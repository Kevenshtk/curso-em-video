function calc(){
    var txtn1 = document.querySelector('#txtn1')
    var txtn2 = document.querySelector('#txtn2')
    var txtn3 = document.querySelector('#txtn3')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var n3 = Number(txtn3.value)
    var res = document.querySelector('#res')
    
    if(n1 > n2 && n1 > n3){
        res.innerHTML = n1+' é o maior número.'
    } else if(n2 > n1 && n2 > n3){
        res.innerHTML = n2+' é o maior número.'
    } else{
        res.innerHTML = n3+' é o maior número.'
    }
}