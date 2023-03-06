var pessoa = 25

var idade = 60
var idadeCin = 0

var peso = 60
var pepsoQua = 0

for(var c = 1; c <= pessoa; c++){
    if(idade > 50){
        idadeCin = idadeCin + 1
    }

    if(peso < 40){
        pepsoQua = pepsoQua + 1 
    }
    idade--
    peso--
}
console.log('São ' +idadeCin+ ' pessoas com idade superior a 50 anos.')
console.log('São ' +pepsoQua+ ' pessoas com peso inferior a 40 quilos.')