import { prisma } from '../../database/client.js';

export class GetByIdVagaController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            const vaga = await prisma.vaga.findUnique({
                where: {
                    id: parseInt(id)
                },
                select: {
                    id: true,
                    titulo: true,
                    descricao: true,
                    bolsa: true,
                    requisitos: true,
                    empresa: {
                        select: {
                            id: true,
                            nome: true,
                            email: true,
                            cnpj: true,
                            senha: true,
                            telefone: true,
                            setor: true,
                            endereco: true
                        }
                    }
                }
            });
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}