var preco = 5
var ingresso = 120

while(preco >= 4.5){
    console.log(`"Lucro máximo: ", ${ingresso * preco - 200}, "preço do ingresso:", ${preco}, "Quantidade de ingressos vendidos", ${ingresso}`)
    preco = preco - 0.5
    ingresso = ingresso + 26
}