import { prisma } from '../../database/client.js';

export class UpdateCandidaturaController {
    async handle(request, response) {
        try {
            const { id, alunoId, vagaId, statusId } = request.body;

            const aluno = await prisma.aluno.findUnique({
                where: {
                    id: parseInt(alunoId)
                }
            });

            const vaga = await prisma.vaga.findUnique({
                where: {
                    id: parseInt(vagaId)
                }
            });

            const status = await prisma.status.findUnique({
                where: {
                    id: parseInt(statusId)
                }
            });

            if(!aluno) {
                return response.status(400).json({ error: 'Aluno não encontrado!' });
            }

            if(!vaga) {
                return response.status(400).json({ error: 'Vaga não encontrada!' });
            }

            if(!status) {
                return response.status(400).json({ error: 'Status não encontrado!' });
            }

            const candidatura = await prisma.candidatura.update({
                where: {
                    id: id
                },
                data: {
                    aluno: {
                        connect: {
                            id: alunoId
                        }
                    },
                    vaga: {
                        connect: {
                            id: vagaId
                        }
                    },
                    status: {
                        connect: {
                            id: statusId
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