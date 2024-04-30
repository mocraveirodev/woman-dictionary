import MulherRepository from '../repositories/MulherRepository.js'

// Mostra a lista de mulheres salvas no Banco de Dados.
async function mostraMulheres(req, res) {
    // Traz a lista de mulheres salvas no Banco de Dados.
    const mulheresVindasDoBancoDeDados = await MulherRepository.encontraMulheres();

    // Retorna a lista de mulheres salvas no Banco de Dados em formato JSON para a aplicação.
    res.status(200).json(mulheresVindasDoBancoDeDados);
}

// Cria uma nova mulher e salva no Banco de Dados.
async function criaMulher(req, res) {
    // Cria o objeto Mulher com base no corpo da requisição.
    const novaMulher = {
        nome: req.body.nome,
        imagem: req.body.imagem,
        minibio: req.body.minibio,
        citacao: req.body.citacao
    };

    // Salva a nova mulher no Banco de Dados.
    const mulherCriada = await MulherRepository.criaMulher(novaMulher);

    // Retorna a nova mulher salva no Banco de Dados em formato JSON para a aplicação.
    res.status(201).json(mulherCriada);
}

// Atualiza uma mulher salva no Banco de Dados.
async function corrigeMulher(req, res) {
    // Atualiza a mulher com base no ID e no corpo da requisição.
    const mulherAtualizadaNoBancoDeDados = await MulherRepository.corrigeMulher(req.params.id, req.body);

    // Retorna a mulher atualizada em formato JSON para a aplicação.
    res.status(200).json(mulherAtualizadaNoBancoDeDados);
}

// Deleta uma mulher salva no Banco de Dados.
async function deletaMulher(req, res) {
    // Tenta deletar a mulher com base no ID.
    await MulherRepository.deletaMulher(req.params.id);

    // Retorna uma mensagem de sucesso para a aplicação.
    res.status(200).json({
        message: 'Mulher deletada com sucesso!'
    });
}

// Exportando as funções para serem usadas em outras partes da aplicação.
export default {
    mostraMulheres,
    criaMulher,
    corrigeMulher,
    deletaMulher
};