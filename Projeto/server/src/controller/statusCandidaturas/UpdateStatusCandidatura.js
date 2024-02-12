import { prisma } from '../../database/client.js';

export class UpdateStatusCandidaturaController {
    async handle(request, response) {
        try {
            const { id, status } = request.body;

            const statusCandidatura = await prisma.statusCandidatura.update({
                where: {
                    id
                },
                data: {
                    status
                }
            });

            return response.json(statusCandidatura);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}