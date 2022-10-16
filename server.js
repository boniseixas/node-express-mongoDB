// bloco de código usado para encontrar rotas com http, método nativo do node.
/*
const http = require("http")
const port = 3000;

const rotas = {
   '/': 'Curso de Node com Express e MongoDB',
   '/livros': 'Entrei na pag de livros',
   '/autores': 'Listagem de autores',
   '/editora': 'Pag de editoras',
   '/sobre': 'Info sobre o projeto'
}

const server = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end(rotas[req.url]);
})

server.listen(port, () => {
   console.log(`Servidor escutando em http://localhost:${port}`);
})
*/

// utilizando o framework express
import app from './src/app.js'

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`Servidor escutando em http://localhost:${port}`)
})