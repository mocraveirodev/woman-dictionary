import express from 'express';

const app = express();
const router = express.Router();
const port = 3333;


function showTime(req, res) {
    const datetime = new Date();
    const time = datetime.toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit', second: '2-digit'});

    res.send(time);
}
function showPort() {
    console.log(`Servidor criado e rodando na porta: ${port}`);
}

app.use(router.get('/time', showTime));

app.listen(port, showPort);