// Importando o Router do Express
import { Router } from 'express';
//Importando o Controller OlaController onde está definido o que fazer quando alguém visita a página inicial
import mostraOla from '../controllers/OlaController.js';

// Criando um novo Router para definir as rotas.
const router = Router();

// Aqui, estamos dizendo ao nosso aplicativo web que quando alguém visita a página inicial (representada por '/'), ele deve seguir a instrução 'mostraOla' encontrada em 'OlaController'. 
router.get('/', mostraOla);

// Nessa linha estamos dizendo que queremos tornar nosso ‘router’ disponível para outras partes do nosso aplicativo web.
export default router;
