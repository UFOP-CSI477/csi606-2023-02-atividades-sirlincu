import { prisma } from '../../database/client.js'; 

export class GetByIdEmpresaController {
    async handle(request, response) {
        try {
            const { id } = request.params;

            const empresa = await prisma.empresa.findUnique({
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