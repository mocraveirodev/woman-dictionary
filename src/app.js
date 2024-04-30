// Esta linha está pedindo para usar uma ferramenta chamada 'express'. 
// Pense no 'express' como uma caixa de ferramentas que nos ajuda a construir aplicativos web.
import express from 'express';
// Importando o pacote 'cors' que nos ajuda a configurar o CORS para o nosso aplicativo.
import cors from 'cors';
// Aqui, estamos importando o arquivo 'routes/index.js' que contém a configuração de todas as rotas do projeto.
import routes from './routes/index.js';

// Aqui, estamos criando um novo aplicativo web usando as ferramentas que pegamos do 'express'.
const app = express();

// Aqui, estamos configurando o aplicativo web para que possamos receber dados em formato JSON.
app.use(express.json());
// Aqui, estamos configurando o aplicativo web para que seja permitido que outras origens acessem nosso aplicativo.
app.use(cors());
// Aqui, estamos dizendo ao aplicativo web para usar as rotas configuradas em 'routes/index.js'.
app.use(routes);

// Aqui, estamos exportando o aplicativo web iniciado e pronto para que possamos usar para iniciar o servidor.
export default app;
