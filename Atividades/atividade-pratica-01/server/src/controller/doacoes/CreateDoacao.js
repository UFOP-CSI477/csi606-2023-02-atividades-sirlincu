import { prisma } from "../../database/client.js";

export class CreateDoacaoController {

    async handle(request, response) {
        try {
            const { data, pessoa_id, local_coleta_id } = request.body;

            const doacao = await prisma.doacao.create({

                data: {
                    data,
                    pessoa: {
                        connect: {
                            id: pessoa_id
                        }
                    },
                    local_coleta: {
                        connect: {
                            id: local_coleta_id
                        }
                    }
                }
            });

            return response.json(doacao);
        } catch (error) {
            // Manipulação de erros
            console.error('Erro ao criar doação:', error);

            return response.status(500).json({
                success: false,
                message: 'Erro interno do servidor ao criar doação.',
                error: error.message || 'Erro desconhecido.',
            });
        }
    }
}