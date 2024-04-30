// Importando o Router do Express, ele vai nos ajudar a definir diferentes caminhos ou “rotas” em nosso aplicativo web. Usamos o Router para dizer ao nosso aplicativo o que fazer quando alguém visita a página inicial ou uma página específica da nossa aplicação.
import { Router } from 'express';
// Importando o arquivo de rotas OláRoutes que contém a rota /ola
import olaRoutes from './olaRoutes.js';
// Importando o arquivo de rotas MulherRoutes que contém a rota /mulher
import mulherRoutes from './mulherRoutes.js';
// Importando o arquivo de rotas MulheresRoutes que contém a rota /mulheres
import mulheresRoutes from './mulheresRoutes.js';
// Importando o arquivo de rotas HoraRoutes que contém a rota /hora
import horaRoutes from './horaRoutes.js';

// Criando um novo Router para definir as rotas.
// É uma prática de mercado ao invés de escrever router em letras maiúsculas por ser uma constante, fazemos uma excesão e mantemos com letras minúsculas, como se fosse uma variável.
const router = Router();

// Aqui, estamos dizendo ao nosso aplicativo web que quando alguém visita a página '/ola', ele deve seguir as instruções encontradas em 'olaRoutes'.
router.use('/ola', olaRoutes);
// Aqui, estamos dizendo ao nosso aplicativo web que quando alguém visita a página '/mulher', ele deve seguir as instruções encontradas em 'mulherRoutes'.
router.use('/mulher', mulherRoutes);
// Aqui, estamos dizendo ao nosso aplicativo web que quando alguém visita a página '/mulheres', ele deve seguir as instruções encontradas em 'mulheresRoutes'.
router.use('/mulheres', mulheresRoutes);
// Aqui, estamos dizendo ao nosso aplicativo web que quando alguém visita a página '/hora', ele deve seguir as instruções encontradas em 'horaRoutes'.
router.use('/hora', horaRoutes);

// Nessa linha estamos dizendo que queremos tornar nosso ‘router’ disponível para outras partes do nosso aplicativo web.
export default router;