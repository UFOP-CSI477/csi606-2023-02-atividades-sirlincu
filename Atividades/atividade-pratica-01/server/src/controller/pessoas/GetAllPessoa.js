import { prisma } from '../../database/client.js'

export class GetAllPessoaController {

    async handle(request, response) {
        try {
            const pessoas = await prisma.pessoa.findMany({
                select: {
                    id: true,
                    nome: true,
                    rua: true,
                    numero: true,
                    complemento: true,
                    rg: true,
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
                    },
                    tipo_sanguineo: {
                        select: {
                            id: true,
                            tipo: true,
                            fator: true
                        }
                    }
                }
            });
            return response.json(pessoas);
        } catch (error) {
            return response.status(500).json({
                message: error.message || 'Erro inesperado ao obter pessoas.'
            });
        }
    }
}