import { prisma } from '../../database/client.js';

export class CreateAlunoController {
    async handle(request, response) {
        try {       
            const { nome, email, senha, cpf, telefone, curso, periodo } = request.body;
        
            if (!nome || !email || !senha || !cpf || !telefone || !curso || !periodo ) {
                return response.status(400).json({ error: 'Preencha todos os campos!' });
            }
            
            const aluno = await prisma.aluno.create({
                data: {
                    nome,
                    email,
                    senha,
                    cpf,
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