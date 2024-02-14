import { prisma } from '../../database/client.js';

export class DeleteFuncionarioController {
    async handle(request, response) {
        try {
            const { id } = request.body;

            const funcionario = await prisma.funcionario.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(funcionario);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}