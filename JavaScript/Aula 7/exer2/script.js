function gerar(){
    var num = document.querySelector('#txtnum')
    var tab = document.querySelector('#seltab')
    if(num.value.length == 0){
        alert('Por favor, digie um número')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}