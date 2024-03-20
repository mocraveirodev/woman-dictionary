import express from 'express';

const app = express();
const router = express.Router();
const port = 3333;


function showWoman(req, res) {
    res.json({
        name: 'Monica Craveiro',
        minibio: 'Desenvolvedora Back-end',
        url: 'https://github.com/mocraveirodev/woman-dictionary'
    });
}
function showPort() {
    console.log("Servidor criado e rodando na porta: ", port);
}

app.use(router.get('/woman', showWoman));

app.listen(port, showPort);