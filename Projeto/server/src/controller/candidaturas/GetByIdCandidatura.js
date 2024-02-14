import { prisma } from '../../database/client.js';

export class GetByIdCandidaturaController {
    async handle(request, response) {
        try {
            const { id } = request.params;
            
            const check = await prisma.candidatura.findUnique({
                where: {
                    id: parseInt(id)
                }
            });

            if(!check) {
                return response.status(400).json({ error: 'Candidatura não encontrada!' });
            }
            
            const candidatura = await prisma.candidatura.findUnique({
                where: {
                    id: parseInt(id)
                },
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

            return response.json(candidatura);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}