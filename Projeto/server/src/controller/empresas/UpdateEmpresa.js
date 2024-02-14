import { prisma } from '../../database/client.js';

export class UpdateEmpresaController {
    async handle(request, response) {
        try {
            const { id, nome, email, senha, cnpj, telefone, setor, endereco } = request.body;

            const empresa = await prisma.empresa.update({
                where: {
                    id: parseInt(id)
                },
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