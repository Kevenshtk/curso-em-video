function gerar(){
    var res = document.querySelector('#res')

    for(var c = 1000; c <= 2000; c++){
        var valor = c % 11
        if(valor == 2){
            var item = document.createElement('option')
            item.text = `${c}`
            res.appendChild(item)
        }
    }
}