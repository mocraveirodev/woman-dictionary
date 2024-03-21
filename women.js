import express from 'express'
import cors from 'cors';
import connectDatabase from './database.js';
import WomanModel from './womanModel.js';

connectDatabase();

const app = express();
const router = express.Router();
const port = 3333;

async function showWomen(req, res) {
    try {
        const women = await WomanModel.find();

        res.status(200).json(women);
    } catch (error) {
        console.error(error);
    }
}

async function newWoman(req, res) {
    const woman = new WomanModel({
        name: req.body.name,
        minibio: req.body.minibio,
        url: req.body.url,
        quote: req.body.quote
    });
    
    try {
        const womanCreated = await woman.save();

        res.status(201).json(womanCreated);
    } catch (error) {
        console.error(error);
    }
}

async function changeWoman(req, res) {
    try {
        const womanFinded = await WomanModel.findById(req.params.id);

        if (req.body.name) {
            womanFinded.name = req.body.name;
        }
    
        if (req.body.minibio) {
            womanFinded.minibio = req.body.minibio;
        }
    
        if (req.body.url) {
            womanFinded.url = req.body.url;
        }
    
        if (req.body.quote) {
            womanFinded.quote = req.body.quote;
        }

        const changedWoman = await womanFinded.save();

        res.status(200).json(changedWoman);
    } catch (error) {
        
    }
}

async function deleteWoman(req, res) {
    try {
        await WomanModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            message: 'Woman deleted successfully'
        });
    } catch (error) {
        console.error(error);
    }
}


function showPort() {
    console.info('Server running on port: ', port);
}

app.use(express.json());
app.use(cors());
app.use(router.get('/women', showWomen));
app.use(router.post('/women', newWoman));
app.use(router.patch('/women/:id', changeWoman));
app.use(router.delete('/women/:id', deleteWoman));

app.listen(port, showPort);