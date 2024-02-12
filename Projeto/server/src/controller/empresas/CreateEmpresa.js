import { prisma } from '../../database/client.js';

export class CreateEmpresaController {
    async handle(request, response) {
        try {
            const { nome, email, cnpj, senha, telefone, endereco, descricao } = request.body;

            if (!nome || !email || !cnpj || !senha || !telefone || !endereco || !descricao) {
                return response.status(400).json({ error: 'Preencha todos os campos!' });
            }
            
            const empresa = await prisma.empresa.create({
                data: {
                    nome,
                    email,
                    cnpj,
                    senha,
                    telefone,
                    setor,
                    endereco
                }
            });

            return response.json(empresa);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}