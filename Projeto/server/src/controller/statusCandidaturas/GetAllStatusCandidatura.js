import { prisma } from '../../database/client.js';

export class GetAllStatusCandidaturaController {
    async handle(request, response) {
        try {
            const statusCandidaturas = await prisma.statusCandidatura.findMany({
                select: {
                    id: true,
                    status: true
                }
            });

            return response.json(statusCandidaturas);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}