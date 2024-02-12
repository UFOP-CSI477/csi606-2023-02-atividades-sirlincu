import { prisma } from '../../database/client.js';

export class DeleteAlunoController {
    async handle(request, response) {
        try {
            const { id } = request.body;

            const aluno = await prisma.aluno.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(aluno);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}