const fs = require('fs')

async function lerArquivo(caminho) {
    try {
        const text = await fs.promises.readFile(caminho, enconding = 'utf-8')
        console.log(text)
    } catch (err) {
        throw new Error(err)
    }
}

lerArquivo('../readme.md')