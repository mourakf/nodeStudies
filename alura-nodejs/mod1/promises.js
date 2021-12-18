// forma que o js lida com ações assíncronas


const fs = require('fs')

function lerArquivo(caminho) {
    fs.promises.readFile(caminho, encoding = 'utf-8')
        // recebe o produto da promessa passado numa funcao callback
        // usado para promises ja existentes
        .then((data) => console.log(data))
        .catch((err) => {
            throw new Error(err.code)
        })
}

lerArquivo('./readme.md')

/* 
construtor Promise para fazer proprias promessas
new Promise((resolve, reject)
4 estados da promessa
1 - pending
2 - solved ou 
3 - reject
4 - fullfiled
5 - settled
*/

module.exports = lerArquivo