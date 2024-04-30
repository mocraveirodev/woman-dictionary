// Importando a conexão com o banco de dados.
import bancoDeDados from '../../config/bancoDeDados.js';
// Importando o modelo do objeto Mulher do banco de dados.
import MulherModel from '../models/mulherModel.js';

// Chamando a função que faz a conexão com o banco de dados.
await bancoDeDados();

// Traz a lista de mulheres salvas no Banco de Dados.
async function encontraMulheres() {
    // Tenta buscar a lista de mulheres salvas no Banco de Dados.
    try {
        // Traz a lista de mulheres salvas no Banco de Dados.
        const mulheresVindasDoBancoDeDados = await MulherModel.find();

        // Retorna a lista de mulheres salvas no Banco de Dados para o Controller
        return mulheresVindasDoBancoDeDados;
    } catch (erro) { // Caso haja um erro na busca das mulheres, exibe o erro no console.
        // Mostrando o erro no console.
        console.error(erro);
    }
}

// Cria uma nova mulher e salva no Banco de Dados.
async function criaMulher(mulher) {
    // Cria uma nova mulher com base no modelo do Banco de Dados e dos dados recebidos na requisição.
    const novaMulher = new MulherModel(mulher);
    
    // Tenta salvar a nova mulher no Banco de Dados.
    try {
        // Salva a nova mulher no Banco de Dados.
        const mulherCriada = await novaMulher.save();

        // Retorna a nova mulher salva no Banco de Dados para o Controller
        return mulherCriada;
    } catch (erro) { // Caso haja um erro na criação da mulher, exibe o erro no console.
        // Mostrando o erro no console.
        console.error(erro);
    }
}

// Atualiza uma mulher e salva no Banco de Dados.
async function corrigeMulher(id, mulher) {
    // Tenta atualizar a mulher com base no ID e no corpo da requisição.
    try {
        // Tenta encontrar a mulher que queremos atualizar com base no ID.
        const mulherEncontrada = await MulherModel.findById(id);

        // Extraimos os dados da mulher que queremos atualizar do corpo da requisição.
        const { nome, minibio, imagem, citacao } = mulher;

        // Atualiza os dados que foram enviados da mulher que queremos atualizar.
        if (nome) {
            mulherEncontrada.nome = nome;
        }
    
        if (minibio) {
            mulherEncontrada.minibio = minibio;
        }
    
        if (imagem) {
            mulherEncontrada.imagem = imagem;
        }

        if (citacao) {
            mulherEncontrada.citacao = citacao;
        }

        // Salva a mulher atualizada no Banco de Dados.
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save();

        // Retorna a mulher atualizada no Banco de Dados para o Controller
        return mulherAtualizadaNoBancoDeDados;
    } catch (erro) { // Caso haja um erro na atualização da mulher, exibe o erro no console.
        // Mostrando o erro no console.
        console.error(erro);
    }
}

// Deleta uma mulher e salva no Banco de Dados.
async function deletaMulher(id) {
    // Tenta deletar a mulher com base no ID.
    try {
        // Tenta encontrar a mulher que queremos deletar com base no ID e a exclui do Banco de Dados.
        await MulherModel.findByIdAndDelete(id);
    } catch (erro) { // Caso haja um erro na exclusão da mulher, exibe o erro no console.
        // Mostrando o erro no console.
        console.error(erro);
    }
}

// Exportando as funções para serem usadas em outras partes da aplicação.
export default {
    encontraMulheres,
    criaMulher,
    corrigeMulher,
    deletaMulher
};