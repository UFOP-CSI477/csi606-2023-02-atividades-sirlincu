import { prisma } from '../../database/client.js';

export class UpdateAlunoController {
    async handle(request, response) {
        try {
            const { id, nome, email, cpf, senha, telefone, curso, periodo } = request.body;

            const aluno = await prisma.aluno.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    email,
                    cpf,
                    senha,
                    telefone,
                    curso,
                    periodo
                }
            });

            return response.json(aluno);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}