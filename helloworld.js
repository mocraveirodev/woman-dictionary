import express from 'express';

const app = express();
const router = express.Router();
const port = 3333;


function showHello(req, res) {
    res.send("Hello World!");
}
function showPort() {
    console.log("Servidor criado e rodando na porta: ", port);
}

app.use(router.get('/hello', showHello));

app.listen(port, showPort);