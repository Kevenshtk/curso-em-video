function gerar(){
    var num = document.querySelector('#txtnum')
    var res = document.querySelector('#res')
    num = Number(num.value)
    res.innerHTML = ''

    for(var c = 1; c <=10; c++){
        var item = document.createElement('option')
        item.text = `${c} X ${num} = ${c*num}`
        item.value =`res${c}`
        res.appendChild(item)
    }
}