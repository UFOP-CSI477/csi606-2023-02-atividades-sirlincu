import { prisma } from "../../database/client.js";

export class UpdateLocalController {
    async handle(request, response) {
        try {
            const { id, nome, rua, numero, complemento, cidade_id } = request.body;

            const cidadeExistente = await prisma.cidade.findUnique({
                where: {
                    id: cidade_id
                }
            });

            if (!cidadeExistente) {
                return response.status(400).json({
                    success: false,
                    message: 'A cidade com o ID fornecido não existe.',
                });
            };

            const local = await prisma.localColeta.update({

                where: {
                    id: parseInt(id)
                },

                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    cidade: {
                        connect: {
                            id: cidade_id
                        }
                    }
                }

            });

            return response.json(local);
        } catch {
            if (error.code === 'P2025') {
                // Código P2025 indica que nenhum registro foi encontrado para atualização
                console.error('Erro: ID não encontrado. Nenhum estado foi atualizado.');
                return response.status(404).json({ error: 'ID não encontrado. Nenhum estado foi atualizado.' });
            } else {
                // Outro erro
                console.error(error);
                return response.status(500).json({ error: 'Erro interno do servidor.' });
            }
        }
    }
}