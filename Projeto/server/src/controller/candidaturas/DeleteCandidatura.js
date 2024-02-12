import { prisma } from '../../database/client.js';

export class DeleteCandidaturaController {
    async handle(request, response) {
        try {
            const { id } = request.body;

            const candidatura = await prisma.candidatura.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(candidatura);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}