import { prisma } from '../../database/client.js';

export class DeleteVagaController {
    async handle(request, response) {
        try {
            const { id } = request.body;

            const vaga = await prisma.vaga.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(vaga);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}