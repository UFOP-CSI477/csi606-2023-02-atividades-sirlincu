import { prisma } from '../../database/client.js';

export class CreateFuncionarioController {
    async handle(request, response) {
        try {       
            const { nome, email, senha, cpf, telefone, cargo, empresaId } = request.body;
        
            if (!nome || !email || !senha || !cpf || !telefone || !cargo || !empresaId) {
                return response.status(400).json({ error: 'Preencha todos os campos!' });
            }

            const empresa = await prisma.empresa.findUnique({
                where: {
                    id: parseInt(empresaId)
                }
            });

            if(!empresa) {
                return response.status(400).json({ error: 'Empresa não encontrada!' });
            }

            const funcionario = await prisma.funcionario.create({
                data: {
                    nome,
                    email,
                    senha,
                    cpf,
                    telefone,
                    cargo,
                    empresa: {
                        connect: {
                            id: empresaId
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