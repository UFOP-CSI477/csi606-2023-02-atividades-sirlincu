import { prisma } from '../../database/client.js';

export class CreateAlunoController {
    async handle(request, response) {
        try {       
            const { nome, email, cpf, data_nascimento, senha, cidade_id } = request.body;
        
            if (!nome || !email || !cpf || !data_nascimento || !senha || !cidade_id) {
                return response.status(400).json({ error: 'Preencha todos os campos!' });
            }
            
            const aluno = await prisma.aluno.create({
                data: {
                    nome,
                    email,
                    cpf,
                    senha,
                    telefone,
                    curso,
                    periodo
                }
            });
        
            return response.json(aluno);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}