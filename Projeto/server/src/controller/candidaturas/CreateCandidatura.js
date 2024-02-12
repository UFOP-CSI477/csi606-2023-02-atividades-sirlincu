import { prisma } from '../../database/client.js';

export class CreateCandidaturaController {
    async handle (request, response) {
        try {
            const { alunoId, vagaId, statusId } = request.body;

            if (!alunoId || !vagaId || !statusId) {
                return response.status(400).json({ error: 'Preencha todos os campos!' });
            }

            const candidatura = await prisma.candidatura.create({
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
