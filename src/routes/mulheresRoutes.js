// Importando o Router do Express
import { Router } from 'express';
// Importando o Controller MulheresController onde está definido o que fazer quando alguém acessa a página inicial
import MulheresController from '../controllers/MulheresController.js';

// Criando um novo Router para definir as rotas.
const router = Router();

// Aqui estamos dizendo ao nosso aplicativo web que quando alguém acessa a página inicial (representada por '/'), ele deve seguir a instrução 'mostraMulheres' encontrada em 'MulheresController' e trazer a lista de mulheres.
router.get('/', MulheresController.mostraMulheres );
// Aqui estamos dizendo ao nosso aplicativo web que quando alguém acessa a página inicial (representada por '/'), ele deve seguir a instrução 'criaMulher' encontrada em 'MulheresController' e criar uma nova mulher.
router.post('/', MulheresController.criaMulher);
// Aqui estamos dizendo ao nosso aplicativo web que quando alguém acessa a página inicial (representada por '/') e manda o id, ele deve seguir a instrução 'corrigeMulher' encontrada em 'MulheresController' e atualizar uma mulher. 
router.patch('/:id', MulheresController.corrigeMulher);
// Aqui estamos dizendo ao nosso aplicativo web que quando alguém acessa a página inicial (representada por '/') e manda o id, ele deve seguir a instrução 'deletaMulher' encontrada em 'MulheresController' e exclui uma mulher.
router.delete('/:id', MulheresController.deletaMulher);

// Nessa linha estamos dizendo que queremos tornar nosso ‘router’ disponível para outras partes do nosso aplicativo web.
export default router;