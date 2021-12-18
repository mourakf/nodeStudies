const texto = "curso da alura - https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar"

function extraiLinks(txt) {
    const validaLink = /((https?:\/\/)?[^\s.]+\.[\w][^\s]+)/
    const result = validaLink.exec(txt)
    const results = [...result]
    return results
}

//console.log(extraiLinks(texto))