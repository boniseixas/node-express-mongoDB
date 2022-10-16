import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
   console.log('conexão com o banco feita com sucesso')
})

const app = express();

app.use(express.json());

routes(app);

// const livros = [
//    {id: 1, "titulo": "Senhor dos aneis"},
//    {id: 2, "titulo": "O Hobiit"},
//    {id: 3, "titulo": "Pogramação Orientada a Objetos"},
//    {id: 4, "titulo": "Como fazer amigos e influenciar pessoas"}
// ]

// bloco de códico transferido para a pasta routes em index.js
// app.get('/', (req, res) => {
//    res.status(200).send('Curso de Node com Express e MongoDB');
// })

// bloco de códico transferido para a pasta controllers em livrosController.js na classe LivroController método listarLivros
// app.get('/livros', (req, res) => {
//    livros.find((err, livros) => {
//       res.status(200).json(livros)
//    })

// })

// bloco de códico transferido para a pasta controllers em livrosController.js na classe LivroController método buscarLivroPorId
// app.get('/livros/:id', (req, res) => {
//    let index = buscaLivro(req.params.id);
//    res.json(livros[index]);
// })

// bloco de códico transferido para a pasta controllers em livrosController.js na classe LivroController método cadastrarLivro
// app.post('/livros', (req, res) => {
//    livros.push(req.body);
//    res.status(201).send('Livro cadastrado com sucesso');
// })

// bloco de códico transferido para a pasta controllers em livrosController.js na classe LivroController método atualizarLivro
// app.put('/livros/:id', (req, res) => {
//    let index = buscaLivro(req.params.id);
//    livros[index].titulo = req.body.titulo;
//    res.json(livros);
// })

// bloco de códico transferido para a pasta controllers em livrosController.js na classe LivroController método excluirLivro
// app.delete('/livros/:id', (req, res) => {
//    let {id} = req.params;
//    let index = buscaLivro(id);
//    livros.splice(index, 1);
//    res.send(`Livro ${id} removido com sucesso`);
// })

// function buscaLivro(id) {
//    return livros.findIndex(livro => livro.id == id);
// }

export default app