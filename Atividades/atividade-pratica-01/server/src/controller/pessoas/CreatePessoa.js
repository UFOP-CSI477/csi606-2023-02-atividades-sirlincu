import { prisma } from "../../database/client.js";

export class CreatePessoaController {
    
    async handle(request, response) {
        try {
            const { nome, rua, numero, complemento, rg, cidade_id, tipo_sanguineo_id } = request.body;

            const pessoa = await prisma.pessoa.create({

                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    rg,
                    cidade: {
                        connect: {
                            id: cidade_id
                        }
                    },
                    tipo_sanguineo: {
                        connect: {
                            id: tipo_sanguineo_id
                        }
                    }
                }
            });

            return response.json(pessoa);
        } catch (error) {
            // Manipulação de erros
            console.error('Erro ao criar pessoa:', error);

            return response.status(500).json({
                success: false,
                message: 'Erro interno do servidor ao criar pessoa.',
                error: error.message || 'Erro desconhecido.',
            });
        }
    }
}