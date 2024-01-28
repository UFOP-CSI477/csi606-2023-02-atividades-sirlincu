import { prisma } from '../../database/client.js'

export class UpdateDoacaoController {

    async handle(request, response) {
        try {

        
            const { id, data, local_coleta_id, pessoa_id } = request.body;

            const localExistente = await prisma.localColeta.findUnique({
                where: {
                    id: local_coleta_id
                }
            });

            if (!localExistente) {
                return response.status(400).json({
                    success: false,
                    message: 'O local com o ID fornecido não existe.',
                });
            };

            const pessoaExistente = await prisma.pessoa.findUnique({
                where: {
                    id: pessoa_id
                }
            });

            if (!pessoaExistente) {
                return response.status(400).json({
                    success: false,
                    message: 'A pessoa com o ID fornecido não existe.',
                });
            };

            const doacao = await prisma.doacao.update({

                where: {
                    id: parseInt(id)
                },

                data: {
                    data,
                    local_coleta: {
                        connect: {
                            id: local_coleta_id
                        }
                    },
                    pessoa: {
                        connect: {
                            id: pessoa_id
                        }
                    }

                }

            });

            return response.json(doacao);
        } catch {
            if (error.code === 'P2025') {
                // Código P2025 indica que nenhum registro foi encontrado para atualização
                console.error('Erro: ID não encontrado. Nenhuma doação foi atualizada.');
                return response.status(404).json({ error: 'ID não encontrado. Nenhuma doação foi atualizada.' });
            } else {
                // Outro erro
                console.error(error);
                return response.status(500).json({ error: 'Erro interno do servidor.' });
            }
        }
    }
}