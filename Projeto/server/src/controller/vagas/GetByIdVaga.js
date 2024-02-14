import { prisma } from '../../database/client.js';

export class GetByIdVagaController {
    async handle(request, response) {
        try {
            const { id } = request.params;

            const check = await prisma.vaga.findUnique({
                where: {
                    id: parseInt(id)
                }
            });

            if(!check) {
                return response.status(400).json({ error: 'Vaga não encontrada!' });
            }

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
                            telefone: true,
                            setor: true,
                            endereco: true
                        }
                    }
                }
            });

            return response.json(vaga);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}