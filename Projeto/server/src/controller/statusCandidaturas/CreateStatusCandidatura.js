import { prisma } from '../../database/client.js';

export class CreateStatusCandidaturaController {
    async handle(request, response) {
        try {
            const { status } = request.body;

            if (!status) {
                return response.status(400).json({ error: 'Preencha todos os campos!' });
            }

            const statusCandidatura = await prisma.statusCandidatura.create({
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