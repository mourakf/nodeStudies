const fs = require('fs')

function lerArquivo(caminho) {
    fs.readFile(caminho, encoding = 'utf-8', (err, data) => {
        if (err) {
            throw new Error(err.code)
        }
        console.log(data)
    });
}

lerArquivo('./readme.md')