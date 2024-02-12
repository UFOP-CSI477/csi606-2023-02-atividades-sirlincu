import { prisma } from '../../database/client.js';

export class DeleteStatusCandidaturaController {
    async handle(request, response) {
        try {
            const { id } = request.body;

            await prisma.statusCandidatura.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.status(204).send();
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}