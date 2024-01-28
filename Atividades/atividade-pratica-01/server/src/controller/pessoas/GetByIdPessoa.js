import { prisma } from "../../database/client.js";

export class GetByIdPessoaController { 
    
    async handle(request, response) {
        try {
            const { id } = request.params;

            const pessoa = await prisma.pessoa.findUnique({

                where: {
                    id : parseInt(id)
                },

                include: {
                    cidade: {
                        include: {
                            estado: true
                        }
                    },
                    tipo_sanguineo: true
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