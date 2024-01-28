import { prisma } from '../../database/client.js'

export class GetAllTipoSanguineoController {

    async handle(request, response) {
        try {
            const tipos = await prisma.tipoSanguineo.findMany({
                select: {
                    id: true,
                    tipo: true,
                    fator: true
                }
            });
            return response.json(tipos);
        } catch (error) {
            return response.status(500).json({
                message: error.message || 'Erro inesperado ao obter tipos.'
            });
        }
    }

}