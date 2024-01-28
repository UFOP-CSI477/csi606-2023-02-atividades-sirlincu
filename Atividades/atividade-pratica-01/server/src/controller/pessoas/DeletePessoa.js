import { prisma } from "../../database/client.js";

export class DeletePessoaController { 

    async handle(request, response) {
        try {
            const { id } = request.body;

            const pessoa = await prisma.pessoa.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(pessoa);
        } catch (error) {
            response.status(400).json({
                message: 'Invalid request.',
                error
            })
        }
    }
}