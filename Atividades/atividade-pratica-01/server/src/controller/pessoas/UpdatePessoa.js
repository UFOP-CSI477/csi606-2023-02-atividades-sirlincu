import { prisma } from "../../database/client.js";

export class UpdatePessoaController {
    
    async handle(request, response) {
        try {
            const { id } = request.params;
            const { nome, rua, numero, complemento, rg, tipo_sanguineo_id, cidade_id } = request.body;

            const pessoa = await prisma.pessoa.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    nome,
                    rua,
                    numero,
                    complemento,
                    tipo_sanguineo_id: parseInt(tipo_sanguineo_id),
                    cidade_id: parseInt(cidade_id)
                }
            });

            return response.json(pessoa);
        } catch (error) {
            response.status(400).json({
                message: 'Invalid request.',
                error
            })
        }
    }
}