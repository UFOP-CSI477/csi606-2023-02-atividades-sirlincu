import { prisma } from "../../database/client.js";

export class GetByIdTipoSanguineoController {
    
    async handle(request, response) {
        try {
            const { id } = request.params;

            const tipo = await prisma.tipoSanguineo.findUnique({

                where: {
                    id : parseInt(id)
                }
            });

            return response.json(tipo);
        } catch (error) {
            response.status(400).json({
                message: 'Invalid request.',
                error
            })
        }
    }
}