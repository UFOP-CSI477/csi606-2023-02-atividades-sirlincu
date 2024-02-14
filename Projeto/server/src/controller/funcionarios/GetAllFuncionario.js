import { prisma } from '../../database/client.js';

export class GetAllFuncionarioController {
    async handle(request, response) {
        try {
            const funcionarios = await prisma.funcionario.findMany({
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

            return response.json(funcionarios);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}