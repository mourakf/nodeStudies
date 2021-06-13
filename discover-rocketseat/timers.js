const { time } = require("console");
const { clearInterval } = require("timers");

//setTimeout - função executada depois de x millisegundos(padrão)
const timeOut = 2000
const done = () => {
    console.log("done")
}
// done é uma função callback. Funcao passada por referencis
setTimeout(done, timeOut); // devolve um objeto do tipo timeOut
console.log(1)

//clear time out - cancela um timeOut()
let timer = setTimeout(done, timeOut)
clearTimeout(timer);

// setInterval - função executa x vezes depois de x milissegundos
let interval = setInterval(done, timeOut);

//clearInterval() - cancelar o setInterval - semelhante ao clear
//clearInterval(interval)
setTimeout( () => clearInterval(interval), timeOut)