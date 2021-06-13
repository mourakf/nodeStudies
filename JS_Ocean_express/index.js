// importa o express
const express = require('express')

// chama o express para ser usado através da variável ‘app’
const app = express()

// chama o express.json para ser usado 
app.use(express.json())
 
// porta que os dados serão acessados
const port = 3000


const postedMessages = ["1", "avocado", "3.50"]
// faz a requisição get no servidor e envia a mensagem de resposta contida no res.send()
// GET / Ler todas as mensagens 
app.get('/messages', (req, res) => { // enviar a variavel message do tipo lista na rota /message com arrow functions
     
/* filter(Boolean) - filtra mensagens excluidas e exibe apenas as verdadeiras
devolve uma nova lista com os valores que não são nulos
*/
  res.status(200).send(postedMessages.filter(Boolean));

});

// GET - ler a mensagem com a requisição de id

app.get('/messages/:id', (req, res) => {
  //declarar a posição do id da mensagem que será lida
  const id = req.params.id;
  let message = postedMessages[id];
  if(message) {
    //envia a mensagem de acordo com o id passado na requisição  
    res.status(200).send(`Sua mensagem: ${message} `);
  }
  else {
    res.status(404).send(`Esse registro com id ${id} não existe `)
  }

});

// Requisição POST / Create


app.post('/messages', function (req,res)  {
  // pegar a mensagem do corpo da requisicao
  const postedMessage = req.body;
  
  if(!postedMessage) {
    res.status(400).send("Chave não encontrada no objeto JSON da requisição");
    
    // o return dentro o if faz com que a função seja encerrada nesse ponto
    return;
  }
  // adiciona o elemento no array | devolve a quantidade total de elementos no array
  const idPost = postedMessages.push(postedMessage);
  //console.log(postedMessages)
  //console.log(postedMessage)
  res.status(201).send(`Mensagem salva sob o id ${idPost}`)

});

// Update / put
app.put('/messages/:id', (req, res) => {
  const id = req.params.id;
  const putMessage = req.body;
  if(postedMessages[id]) {
    postedMessages[id] = putMessage;
    console.log(postedMessages);
    res.status(200).send(`Atualizado com sucesso id ${id}`);
  } else{
    res.status(404).send(`Esse registro não existe, portanto não pode ser alterado.`)
  }
  

});

// Deletar um elemento pelo id
app.delete('/messages/:id', function (req,res) {
  // pegar o id no parametro da requisição
  const getId = req.params.id;
  console.log(getId)
  // deletar o elemento no array pela posição do id
  if(postedMessages[getId]) {
    delete postedMessages[getId];
    res.status(200).send(`Deletado com sucesso o id ${getId} registro`)

  }
  else {
    res.status(400).send(`Id de nº ${getId} não existe`)
    
  }
 
  //console.log(postedMessages);


});

// servidor usará a porta 3000
app.listen(port);