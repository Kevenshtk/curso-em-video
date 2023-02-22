function calc(){
    var txtn1 = document.querySelector('#txtn1')
    var txtn2 = document.querySelector('#txtn2')
    var txtn3 = document.querySelector('#txtn3')
    var res = document.querySelector('#res')
    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var n3 = Number(txtn3.value)

    if(n1 > n2 && n1 > n3){
        if(n2 > n3){
            res.innerHTML = n1+ ', '+n2+', ' +n3
        } else {
            res.innerHTML = n1+ ', '+n3+', ' +n2
        }
    } else if(n2 > n1 && n2 > n3){
        if(n1 > n3){
            res.innerHTML = n2+ ', '+n1+', ' +n3
        } else {
            res.innerHTML = n2+ ', '+n3+', ' +n1
        }
    } else {
        if(n1 > n2){
            res.innerHTML = n3+ ', '+n1+', ' +n2
        } else {
            res.innerHTML = n3+ ', '+n2+', ' +n1
        }
    }
}