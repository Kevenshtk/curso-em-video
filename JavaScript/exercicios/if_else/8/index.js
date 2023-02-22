function calc(){
    var txtpro1 = document.querySelector('#txtpro1')
    var txtpro2 = document.querySelector('#txtpro2')
    var txtpro3 = document.querySelector('#txtpro3')
    var valorp1 = Number(txtpro1.value)
    var valorp2 = Number(txtpro2.value)
    var valorp3 = Number(txtpro3.value)
    var res = document.querySelector('.res')

    if(valorp1 < valorp2 && valorp1 < valorp3){
        res.innerText = 'O produto A é o mais barato.'
    } else if(valorp2 < valorp1 && valorp2 < valorp3){
        res.innerText = 'O produto B é o mais barato.'
    } else{
        res.innerText = 'O produto C  é o mais barato.'
    }
}