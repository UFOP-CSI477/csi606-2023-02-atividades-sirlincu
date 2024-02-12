import { prisma } from '../../database/client.js';

export class GetAllEmpresaController {
    async handle(request, response) {
        try {
            const empresas = await prisma.empresa.findMany({
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    cnpj: true,
                    senha: true,
                    telefone: true,
                    setor: true
                }
            });

            return response.json(empresas);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}