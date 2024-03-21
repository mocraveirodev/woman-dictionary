import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const router = express.Router();
const port = 3333;

const women = [
    {
        id: '1',
        name: 'Monica Craveiro',
        minibio: 'Desenvolvedora Back-end',
        url: 'https://github.com/mocraveirodev/woman-dictionary'
    },
    {
        id: '2',
        name: 'Monica Craveiro',
        minibio: 'Desenvolvedora Back-end',
        url: 'https://github.com/mocraveirodev/woman-dictionary'
    },
    {
        id: '3',
        name: 'Monica Craveiro',
        minibio: 'Desenvolvedora Back-end',
        url: 'https://github.com/mocraveirodev/woman-dictionary'
    }
]
function showWomen(req, res) {
    res.json(women);
}

function newWoman(req, res) {
    const woman = {
        id: uuidv4(),
        name: req.body.name,
        minibio: req.body.minibio,
        url: req.body.url
    };

    women.push(woman);

    res.json(women);
}

function changeWoman(req, res) {
    function findWoman(woman) {
        if (woman.id === req.params.id) {
            return woman;
        }
    }
    
    const womanFinded = women.find(findWoman);

    if (req.body.name) {
        womanFinded.name = req.body.name;
    }

    if (req.body.minibio) {
        womanFinded.minibio = req.body.minibio;
    }

    if (req.body.url) {
        womanFinded.url = req.body.url;
    }

    res.json(womanFinded);
}

function deleteWoman(req, res) {
    women = women.filter(woman => woman.id !== req.params.id);

    res.json(women);
}


function showPort() {
    console.log("Servidor criado e rodando na porta: ", port);
}

app.use(express.json());
app.use(router.get('/women', showWomen));
app.use(router.post('/women', newWoman));
app.use(router.patch('/women/:id', changeWoman));
app.use(router.delete('/women/:id', deleteWoman));

app.listen(port, showPort);