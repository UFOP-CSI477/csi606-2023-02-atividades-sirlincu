import { prisma } from '../../database/client.js';

export class UpdateVagaController {
    async handle (request, response) {
        try {
            const { id, titulo, descricao, bolsa, requisitos, empresaId } = request.body;

            const vaga = await prisma.vaga.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    titulo,
                    descricao,
                    bolsa,
                    requisitos,
                    empresa: {
                        connect: {
                            id: empresaId
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