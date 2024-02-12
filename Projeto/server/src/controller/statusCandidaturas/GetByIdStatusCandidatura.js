import { prisma } from '../../database/client.js';

export class GetByIdStatusCandidaturaController {
    async handle(request, response) {
        try {
            const { id } = request.params;

            const statusCandidatura = await prisma.statusCandidatura.findUnique({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(statusCandidatura);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}