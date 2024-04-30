// Importando o mongoose para fazer o modelo da Mulher
import mongoose from 'mongoose';

// Criando o esquema da Mulher
const MulherSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    },
    citacao: {
        type:String,
        required: true,
    },
    minibio: {
        type: String,
        required: true,
    }
})

// Exportando o modelo da Mulher
export default mongoose.model('diva', MulherSchema);
