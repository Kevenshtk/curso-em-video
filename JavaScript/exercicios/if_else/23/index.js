function verificar(){
    var idade = document.querySelector('#idade')
    var res = document.querySelector('#res')
    idade = Number(idade.value)

    if(idade >= 18 && idade <= 67){
        res.innerText = 'Pode doar sangue.'
    } else {
        res.innerText = 'Não pode doar sangue.'
    }
}