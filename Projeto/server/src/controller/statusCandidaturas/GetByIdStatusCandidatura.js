import { prisma } from '../../database/client.js';

export class GetByIdStatusCandidaturaController {
    async handle(request, response) {
        try {
            const { id } = request.params;

            const check = await prisma.statusCandidatura.findUnique({
                where: {
                    id: parseInt(id)
                }
            });

            if(!check) {
                return response.status(400).json({ error: 'Status da candidatura não encontrado!' });
            }

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