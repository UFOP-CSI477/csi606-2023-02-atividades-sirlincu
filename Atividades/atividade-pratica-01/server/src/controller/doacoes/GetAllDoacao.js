import { prisma } from '../../database/client.js'

export class GetAllDoacaoController {
    async handle(request, response) {
        try {
            const doacoes = await prisma.doacao.findMany({
                select: {
                    id: true,
                    data: true,
                    local_coleta: {
                        select: {
                            id: true,
                            nome: true,
                            rua: true,
                            numero: true,
                            complemento: true,
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
                    },
                    pessoa: {
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
                    }
                }
            });
            return response.json(doacoes);
        } catch (error) {
            return response.status(500).json({
                message: error.message || 'Erro inesperado ao obter doações.'
            });
        }
    }
}