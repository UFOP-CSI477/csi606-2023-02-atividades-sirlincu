import { prisma } from "../../database/client.js";

export class GetByIdDoacaoController {

    async handle(request, response) {
        try {
            const { id } = request.params;

            const doacao = await prisma.doacao.findUnique({

                where: {
                    id : parseInt(id)
                },

                include: {
                    local_coleta: {
                        include: {
                            cidade: {
                                include: {
                                    estado: true
                                }
                            }
                        }
                    },
                    pessoa: {
                        include: {
                            cidade: {
                                include: {
                                    estado: true
                                }
                            },
                            tipo_sanguineo: true
                        }
                    }
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