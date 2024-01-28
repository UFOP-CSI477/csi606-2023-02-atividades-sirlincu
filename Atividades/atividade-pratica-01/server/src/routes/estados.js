import { Router } from 'express'
import { GetAllEstadoController } from '../controller/estados/GetAllEstado.js'
import { GetByIdEstadoController } from '../controller/estados/GetByIdEstado.js';
import { CreateEstadoController } from '../controller/estados/CreateEstado.js';
import { UpdateEstadoController } from '../controller/estados/UpdateEstado.js';
import { DeleteEstadoController } from '../controller/estados/DeleteEstado.js';

const estadoRouter = Router()


// Get All
const getAllEstadoController = new GetAllEstadoController();
estadoRouter.get('/estados', getAllEstadoController.handle)

// Get by ID
const getByIdEstadoController = new GetByIdEstadoController();
estadoRouter.get('/estados/:id', getByIdEstadoController.handle);

// Create
const createEstadoController = new CreateEstadoController();
estadoRouter.post('/estados', createEstadoController.handle)

// Update
const updateEstadoController = new UpdateEstadoController()
estadoRouter.put('/estados', updateEstadoController.handle)

// Delete
const deleteEstadoController = new DeleteEstadoController();
estadoRouter.delete('/estados', deleteEstadoController.handle)

// Export - router
export { estadoRouter };