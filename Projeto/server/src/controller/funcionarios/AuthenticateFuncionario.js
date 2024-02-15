import { prisma } from '../../database/client.js';

export class AuthenticateFuncionarioController {
    async handle (request, response) {
        try {
            const { email, senha } = request.body;

            const funcionario = await prisma.funcionario.findFirst({
                where: {
                    email,
                    senha
                }
            });

            if(!funcionario) {
                return response.status(400).json({ error: 'Funcionario não encontrado!' });
            }          

            return response.json({ tipo: 'funcionario', dados: funcionario });
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}