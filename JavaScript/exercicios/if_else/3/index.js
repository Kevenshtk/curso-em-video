function veri(){
    var sexo = document.getElementById('txtsexo')
    var res = document.querySelector('.res')

    if(sexo.value == 'f' || sexo.value == 'F'){
        res.innerHTML = 'Feminino'
    } else if(sexo.value == 'm' || sexo.value == 'M'){
        res.innerHTML = 'Masculino'
    } else {
        res.innerHTML = 'Sexo inválido'
    }
}