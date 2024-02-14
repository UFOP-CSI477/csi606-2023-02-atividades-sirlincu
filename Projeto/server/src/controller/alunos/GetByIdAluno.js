import { prisma } from '../../database/client.js';

export class GetByIdAlunoController {
    async handle(request, response) {
        try {
            const { id } = request.params;

            const check = await prisma.aluno.findUnique({
                where: {
                    id: parseInt(id)
                }
            });

            if(!check) {
                return response.status(400).json({ error: 'Aluno não encontrado!' });
            }

            const aluno = await prisma.aluno.findUnique({
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