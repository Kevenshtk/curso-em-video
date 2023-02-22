function gerar(){
    var c = 1
    var n = 1

    while(n <= 10){
        c = 0
        while(c <= 11){
            var item = document.createElement('option')
            item.text = `${n} X ${c} = ${c*n}`
            item.value = `res${c}`
            res.appendChild(item)
            c++
        }
        item.text = ``
        res.appendChild(item)
    n++ 
    }
}