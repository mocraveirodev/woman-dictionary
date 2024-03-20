import express from 'express';

const app = express();
const port = 3333;

function showPort() {
    console.log("Servidor criado e rodando na porta: ", port);
}

app.listen(port, showPort);