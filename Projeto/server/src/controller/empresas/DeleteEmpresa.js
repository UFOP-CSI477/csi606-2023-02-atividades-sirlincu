import { prisma } from '../../database/client.js';

export class DeleteEmpresaController {
    async handle(request, response) {
        try {
            const { id } = request.body;

            const empresa = await prisma.empresa.delete({
                where: {
                    id: parseInt(id)
                }
            });

            return response.json(empresa);
        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    }
}