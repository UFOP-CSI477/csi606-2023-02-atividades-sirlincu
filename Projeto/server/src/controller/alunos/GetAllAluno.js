import { prisma } from '../../database/client.js';

export class GetAllAlunoController {
    async handle(request, response) {
        try {
            const alunos = await prisma.aluno.findMany({
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    senha: true,
                    cpf: true,
                    telefone: true,
                    curso: true,
                    periodo: true
                }
            });

            return response.json(alunos);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}