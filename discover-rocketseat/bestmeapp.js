// processo de saida padrão
//process.stdout.write("something \n")
const readline = require("readline");

const questions = ["What have I learned today?", "What made me sad?", "What can I do better than yesterday?"]; 

const answers = [];

function askMe(index=0) {
    return process.stdout.write(questions[index] + "\n\n")
};



askMe()
//on("data", funcao data ) - acompanha eventos de forma assincrona 
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if(answers.length < questions.length) {
        askMe(answers.length)
    } else {
        process.exit()
    }
});
// para poder exibir a saida dos dados; nao pode ser exibido no else do stin.on()
process.on('exit', () => {
    for(i=0; i < answers.length; i++) {
        console.log(`${questions[i]} > ${answers[i]}`)
    }
    
});