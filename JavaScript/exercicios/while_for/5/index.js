var valor = 500

for(var c = 1; c < 26; c++){
    console.log(`valor da compra $${valor} - porcentagem de desconto ${c}% - valor final $${valor *(1-(c/100))}`)
    valor = valor + 100
}