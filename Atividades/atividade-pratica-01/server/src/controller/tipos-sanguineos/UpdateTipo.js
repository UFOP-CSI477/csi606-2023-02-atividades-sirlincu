import { prisma } from "../../database/client.js";

export class UpdateTipoSanguineoController {

    async handle(request, response) {
        try {
            const { id } = request.params;
            const { tipo, fator } = request.body;

            const tipoSanguineo = await prisma.tipoSanguineo.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    tipo,
                    fator
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