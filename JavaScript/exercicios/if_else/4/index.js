function verificar(){
    var txt = document.querySelector('#txt')
    var res = document.querySelector('#res')

    if(txt.value == 'a' || txt.value == 'i' || txt.value == 'u' || txt.value == 'e' || txt.value == 'o'){
        res.innerHTML = '<strong>Vogal</strong>'
    } else {
        res.innerHTML = '<strong>Consoante</strong>'
    }
}