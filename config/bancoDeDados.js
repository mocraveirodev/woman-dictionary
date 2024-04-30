// Importando o mongoose para fazer a conexão com o banco de dados
import mongoose from 'mongoose';
// Importando o dotenv para ler as variáveis de ambiente
import 'dotenv/config';

// Conectando ao banco de dados
async function conectaBancoDeDados() {
    // Tenta conectar com o banco de dados
    try {
        // Informando que vai iniciar a conexão com o banco de dados.
        console.info('Conexão com o banco de dados iniciou');

        // Esperando a conexão ser estabelecida através do mongoose
        await mongoose.connect(process.env.MONGO_URL);

        // Informando que a conexão com o banco de dados foi estabelecida
        console.info('Conexão com o banco de dados feita com sucesso!');
    } catch (erro) { // Caso haja um erro na conexão com o banco de dados, exibe o erro no console
        // Mostrando o erro no console
        console.error(erro);
    }
}

// Exportando a função para ser usada em outras partes da aplicação.
export default conectaBancoDeDados;