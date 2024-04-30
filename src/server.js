// Nós mudamos a maneira como trazemos ferramentas para o nosso código. Agora usamos uma maneira mais moderna chamada ES6, que nos permite usar 'import' e 'export'.
// Estamos trazendo o arquivo 'app.js' que é responsável por iniciar nosso aplicativo web.
import app from './app.js';
// Estamos trazendo a biblioteca 'dotenv'. Essa ferramenta nos ajuda a usar informações secretas que não queremos mostrar a todos do arquivo '.env'.
import 'dotenv/config';


// Na aula 3.3.1, foi falado que as vezes a gente precisa mudar a porta do servidor. Então, alternativamente, podemos usar a variável de ambiente APP_PORT para mudar a porta do servidor ou caso não tenha a variável de ambiente, podemos usar a porta padrão 3333.
//  No JavaScript, o operador || é conhecido como operador lógico 'OR', ou 'OU' em português. Ele retorna verdadeiro se qualquer um dos seus valores for verdadeiro. Se ambos os valores forem falsos, ele retorna falso.
// É uma boa prática escrever as constantes em maiúsculo em JavaScript, isso ajuda a diferenciar as constantes de outras variáveis e torna o código mais fácil de ler e entender.
const PORTA = process.env.APP_PORT || 3333;

// Função que mostra a porta do servidor.
function mostraPorta() {
    console.log('Servidor criado e rodando na porta ', PORTA)
}

// Estamos preparando nosso aplicativo web para começar a receber visitantes.
// Pense nisso como abrir as portas da sua loja no início do dia.
app.listen(PORTA, mostraPorta);
