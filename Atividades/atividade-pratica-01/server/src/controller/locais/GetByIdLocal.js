import { prisma } from "../../database/client.js";

export class GetByIdLocalController {
    async handle(request, response) {
        try {
            const { id } = request.params;

            const local = await prisma.localColeta.findUnique({

                where: {
                    id : parseInt(id)
                },

                include: {
                    cidade: {
                        include: {
                            estado: true
                        }
                    }
                }
            });

            return response.json(local);
        } catch (error) {
            response.status(400).json({
                message: 'Invalid request.',
                error
            })
        }
    }

}