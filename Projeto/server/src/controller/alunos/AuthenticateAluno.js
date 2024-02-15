import { prisma } from '../../database/client.js';

export class AuthenticateAlunoController {
    async handle (request, response) {
        try {
            const { email, senha } = request.body;

            const aluno = await prisma.aluno.findFirst({
                where: {
                    email,
                    senha
                }
            });

            if(!aluno) {
                return response.status(400).json({ error: 'Aluno não encontrado!' });
            }          

            
            return response.json({ tipo: 'aluno', dados: aluno });
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}