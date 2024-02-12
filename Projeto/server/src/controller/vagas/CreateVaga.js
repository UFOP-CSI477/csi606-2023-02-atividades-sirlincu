import { prisma } from '../../database/client.js';

export class CreateVagaController {
    async handle(request, response) {
        try {    
            const { nome, descricao, salario, empresaId } = request.body;
        
            const vaga = await prisma.vaga.create({
            data: {
                titulo,
                descricao,
                bolsa,
                requisitos,
                localizacao,
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
            },
        });
    
        return response.json(vaga);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}
