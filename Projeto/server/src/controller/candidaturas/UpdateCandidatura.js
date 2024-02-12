import { prisma } from '../../database/client.js';

export class UpdateCandidaturaController {
    async handle(request, response) {
        try {
            const { id, alunoId, vagaId, statusId } = request.body;

            const alunoExistente = await prisma.aluno.findUnique({
                where: {
                    id: parseInt(alunoId)
                }
            });
            if (!alunoExistente) {
                return response.status(400).json({ error: 'Aluno não encontrado!' });
            }

            const vagaExistente = await prisma.vaga.findUnique({
                where: {
                    id: parseInt(vagaId)
                }
            });
            if (!vagaExistente) {
                return response.status(400).json({ error: 'Vaga não encontrada!' });
            }

            const statusExistente = await prisma.statusCandidatura.findUnique({
                where: {
                    id: parseInt(statusId)
                }
            });
            if (!statusExistente) {
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