let multiplicador = 10
let n = 10
let i =1 

while (i <= n) {
    let calculoTabuado = multiplicador * i
    let textoDeExibicao = `${multiplicador} x ${i} = ${calculoTabuado}`
    console.log(textoDeExibicao)
    i ++
}