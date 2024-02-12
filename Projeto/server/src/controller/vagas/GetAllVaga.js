import { prisma } from '../../database/client.js';

export class GetAllVagaController {
    async handle(request, response) {
        try {
            const vagas = await prisma.vaga.findMany({
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
                            senha: true,
                            telefone: true,
                            setor: true,
                            endereco: true
                        }
                    }
                }
            });

            return response.json(vagas);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}