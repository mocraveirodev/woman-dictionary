// Definindo a função mostraOla que recebe uma 'request' e uma 'response' e vai mostrar uma mensagem na tela
// É uma prática de mercado ao invés de escrever por extenso 'request' e 'response', nós abreviamos para 'req' e 'res'.
function mostraOla(req, res) {
    res.send('Olá, mundo!');
}

// Exportando a função mostraOla para ser usada em outras partes da aplicação.
export default mostraOla;