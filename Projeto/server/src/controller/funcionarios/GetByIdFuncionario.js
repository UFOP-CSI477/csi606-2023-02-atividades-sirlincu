import { prisma } from '../../database/client.js';

export class GetByIdFuncionarioController {
    async handle(request, response) {
        try {
            const { id } = request.params;

            const check = await prisma.funcionario.findUnique({
                where: {
                    id: parseInt(id)
                }
            });

            if(!check) {
                return response.status(400).json({ error: 'Funcionário não encontrado!' });
            }

            const funcionario = await prisma.funcionario.findUnique({
                where: {
                    id: parseInt(id)
                },
                select: {
                    id: true,
                    nome: true,
                    email: true,
                    senha: true,
                    cpf: true,
                    telefone: true,
                    cargo: true,
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
            });

            return response.json(funcionario);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}