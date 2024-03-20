import express from 'express';

const app = express();
const router = express.Router();
const port = 3333;

const women = [
    {
        name: 'Monica Craveiro',
        minibio: 'Desenvolvedora Back-end',
        url: 'https://github.com/mocraveirodev/woman-dictionary'
    },
    {
        name: 'Monica Craveiro',
        minibio: 'Desenvolvedora Back-end',
        url: 'https://github.com/mocraveirodev/woman-dictionary'
    },
    {
        name: 'Monica Craveiro',
        minibio: 'Desenvolvedora Back-end',
        url: 'https://github.com/mocraveirodev/woman-dictionary'
    }
]
function showWomen(req, res) {
    res.json(women);
}
function showPort() {
    console.log("Servidor criado e rodando na porta: ", port);
}

app.use(router.get('/women', showWomen));

app.listen(port, showPort);