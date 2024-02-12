import { prisma } from '../../database/client.js';

export class CreateVagaController {
    async handle(request, response) {
        try {    
            const { titulo, descricao, bolsa, requisitos, empresaId } = request.body;
        
            const vaga = await prisma.vaga.create({
            data: {
                titulo,
                descricao,
                bolsa,
                requisitos,
                empresa: {
                    connect: {
                        id: empresaId
                    }
                }
            },
        });
    
        return response.json(vaga);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}
