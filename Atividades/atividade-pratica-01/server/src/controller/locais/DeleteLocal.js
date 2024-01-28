import { prisma } from '../../database/client.js'

export class DeleteLocalController {
    
    async handle(request, response) {
        try {
            const { id } = request.body;

            const local = await prisma.localColeta.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(local);
        } catch (error) {
            if (error.code === 'P2025') {
                // Código P2025 indica que nenhum registro foi encontrado para exclusão
                console.error('Erro: ID não encontrado. Nenhum local excluído.');
                return response.status(404).json({ error: 'ID não encontrado. Nenhum local excluído.' });
            } else {
                // Outro erro não relacionado ao ID não encontrado
                console.error(error);
                return response.status(500).json({ error: 'Erro interno do servidor.' });
            }
        }
    }
}