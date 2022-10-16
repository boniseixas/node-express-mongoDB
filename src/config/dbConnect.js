import mongoose from "mongoose";
// (mongodb+srv://bonifaciosousa:<password>@node-express-mongodb.9xk8604.mongodb.net/?retryWrites=true&w=majority) como vem a string de conexão do mongo db atlas
mongoose.connect("mongodb+srv://bonifaciosousa:familiass6@node-express-mongodb.9xk8604.mongodb.net/node-express");

let db = mongoose.connection;

export default db;