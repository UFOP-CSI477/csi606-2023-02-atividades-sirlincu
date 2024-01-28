import { prisma } from '../../database/client.js'

export class CreateTipoSanguineoController {

    async handle(request, response) {
        try {
            const { tipo, fator } = request.body;

            const tipoSanguineo = await prisma.tipoSanguineo.create({

                data: {
                    tipo,
                    fator
                }
            });

            return response.json(tipoSanguineo);
        } catch (error) {
            // Manipulação de erros
            console.error('Erro ao criar tipo sanguíneo:', error);

            return response.status(500).json({
                success: false,
                message: 'Erro interno do servidor ao criar tipo sanguíneo.',
                error: error.message || 'Erro desconhecido.',
            });
        }
    }

}