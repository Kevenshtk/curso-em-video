function calc(){
    var txtnum = document.getElementById('txtnum')
    var num = Number(txtnum.value)
    var res = document.getElementById('res')

    if(num < 0){
        res.innerText = 'O número é negativo.'
    } else {
        res.innerText = 'O número é positivo.'
    }
}