function calc(){
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)

    if(n1 > n2){
        res.innerHTML = n1+' é o maior número.'
    } else {
        res.innerHTML = n2+' é o maior número.'
    }
}