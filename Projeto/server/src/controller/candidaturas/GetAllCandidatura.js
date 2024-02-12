import { prisma } from '../../database/client.js';

export class GetAllCandidaturaController {
    async handle(request, response) {
        try {
            const candidaturas = await prisma.candidatura.findMany({
                select: {
                    id: true,
                    aluno: {
                        select: {
                            id: true,
                            nome: true,
                            email: true,
                            senha: true,
                            cpf: true,
                            telefone: true,
                            curso: true,
                            periodo: true
                        }
                    },
                    vaga: {
                        select: {
                            id: true,
                            titulo: true,
                            descricao: true,
                            bolsa: true,
                            requisitos: true,
                            empresa: {
                                select: {
                                    id: true,
                                    nome: true,
                                    email: true,
                                    senha: true,
                                    cnpj: true,
                                    telefone: true,
                                    setor: true,
                                    endereco: true
                                }
                            }
                        }
                    },
                    status: {
                        select: {
                            id: true,
                            status: true
                        }
                    }
                }
            });
            return response.json(candidaturas);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}