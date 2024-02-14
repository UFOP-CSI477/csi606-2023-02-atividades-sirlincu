import { prisma } from '../../database/client.js';

export class CreateEmpresaController {
    async handle(request, response) {
        try {
            const { nome, email, senha, cnpj, telefone, setor, endereco } = request.body;

            if (!nome || !email || !senha || !cnpj || !telefone || !setor || !endereco) {
                return response.status(400).json({ error: 'Preencha todos os campos!' });
            }
            
            const empresa = await prisma.empresa.create({
                data: {
                    nome,
                    email,
                    cnpj,
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