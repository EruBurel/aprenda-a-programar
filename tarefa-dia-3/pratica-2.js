let multiplicador = 23
let numero = 10
let e = 1
 
while (e<=numero) {
    let calculoTabuado = multiplicador * e
    let textoDeExibicao = `${multiplicador} x ${e} = ${calculoTabuado}`
    console.log(textoDeExibicao)
    e ++ 
}