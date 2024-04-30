// Cirando a função mostraHora que recebe uma 'request' e uma 'response' e vai mostrar a hora na tela
function mostraHora(req, res) {
    // Cria a constante data que recebe a data completa do sistema
    const data = new Date();
    // Cria a constante hora que converte a data completa e extrai apenas a hora.
    const hora = data.toLocaleTimeString('pt-BR');

    // Envia a resposta na tela
    res.send(hora);
}

// Exportando a função mostraHora para ser usada em outras partes da aplicação.
export default mostraHora;