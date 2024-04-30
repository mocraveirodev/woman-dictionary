// Cria a função mostraMulher que recebe uma 'request' e uma 'response' e vai mostrar um objeto na tela em formato JSON.
function mostraMulher(req, res) {
    // Envia a resposta para a apliação com o objeto JSON.
    res.json({
        nome: 'Monica Craveiro',
        imagem: 'https://github.com/mocraveirodev.png',
        minibio: 'Desenvolvedora Back-end e Embaixadora da Progra{m}aria.'
    });
}

// Exportando a função mostraMulher para ser usada em outras partes da aplicação.
export default mostraMulher;