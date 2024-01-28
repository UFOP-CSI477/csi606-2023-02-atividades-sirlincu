import { prisma } from '../../database/client.js'

export class GetAllLocalController {
    async handle(request, response) {
        try {
            const locais = await prisma.localColeta.findMany({
                select: {
                    id: true,
                    nome: true,
                    cidade: {
                        select: {
                            id: true,
                            nome: true,
                            estado: {
                                select: {
                                    id: true,
                                    nome: true,
                                    sigla: true
                                }
                            }
                        }
                    }
                }
            });
            return response.json(locais);
        } catch (error) {
            return response.status(500).json({
                message: error.message || 'Erro inesperado ao obter locais.'
            });
        }
    }
}