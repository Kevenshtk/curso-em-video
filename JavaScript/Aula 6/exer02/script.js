function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','f-crianca-m.png')
            } else if(idade < 21){
                img.setAttribute('src','f-jovem-m.png')
            } else if (idade < 50){
                img.setAttribute('src','f-adulto-m.png')
            } else{
                img.setAttribute('src','f-idoso-m.png')
            }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','f-crianca-f.png')
            } else if(idade < 21){
                img.setAttribute('src','f-jovem-f.png')
            } else if (idade < 50){
                img.setAttribute('src','f-adulto-f.png')
            } else{
                img.setAttribute('src','f-idoso-f.png')
            }
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}