import { prisma } from "../../database/client.js";

export class DeleteDoacaoController {
    
    async handle(request, response) {
        try {
            const { id } = request.body;

            const doacao = await prisma.doacao.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(doacao);
        } catch (error) {
            response.status(400).json({
                message: 'Invalid request.',
                error
            })
        }
    }
}