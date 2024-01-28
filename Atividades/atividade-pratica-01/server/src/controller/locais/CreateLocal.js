import { prisma } from '../../database/client.js'

export class CreateLocalController {
    
    async handle(request, response) {
        try {
            const { nome, rua, numero, complemento, cidade_id } = request.body;

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

            const local = await prisma.localColeta.create({

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
        } catch (error) {
            // Manipulação de erros
            console.error('Erro ao criar local:', error);

            if (error.code === 'P2016') {
                // Código P2016 indica que a cidade não foi encontrada
                return response.status(400).json({
                    success: false,
                    message: 'A cidade com o ID fornecido não existe.',
                });
            }

            return response.status(500).json({
                success: false,
                message: 'Erro interno do servidor ao criar local.',
                error: error.message || 'Erro desconhecido.',
            });
        }
    }
}