function verificar(){
    var txtnum = document.querySelector('#txtnum')
    var res = document.querySelector('#res')
    var num = Number(txtnum.value)
    res.style.color = 'black'

    if(num == 1){
        res.innerHTML = 'Domingo'
    } else if(num == 2){
        res.innerHTML = 'Sgunda-Feira'
    } else if(num == 3){
        res.innerHTML = 'Terça-Feira'
    } else if(num == 4){
        res.innerHTML = 'Quarta-Feira'
    } else if(num == 5){
        res.innerHTML = 'Quinta-Feira'
    } else if(num == 6){
        res.innerHTML = 'Sexta-Feira'
    } else if(num == 7){
        res.innerHTML = 'Sabádo'
    } else {
        res.style.color = 'red'
        res.innerHTML = 'Valor inválido'
    }
}