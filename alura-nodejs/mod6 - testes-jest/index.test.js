const {
    test,
    expect,
    describe,
    it
} = require("@jest/globals");


const testes = require('./index')

// formato 1
describe('sum', () => {
    it('deve ser uma funcao', () => {
        expect(typeof testes.sum).toBe('function')
    })
})

// formato 2 
test('deve retornar um numero', () => {
    expect(testes.sum(1, 2)).toBe(3)
})
const lerArquivo = require('../mod2 - Regex/link-regex')
const link = ["https://www.alura.com.br/artigos/testes-com-mocks-e-stub"]
/* 
matchers:
toBe - comparação do resultado
toEqual - comparacao de estrutura de dados


*/