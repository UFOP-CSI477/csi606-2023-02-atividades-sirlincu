import { prisma } from "../../database/client.js";

export class DeleteTipoSanguineoController { 

    async handle(request, response) {
        try {
            const { id } = request.body;

            const tipoSanguineo = await prisma.tipoSanguineo.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(tipoSanguineo);
        } catch (error) {
            response.status(400).json({
                message: 'Invalid request.',
                error
            })
        }
    }
}
