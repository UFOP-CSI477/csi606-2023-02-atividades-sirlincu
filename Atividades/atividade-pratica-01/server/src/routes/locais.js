import { Router } from 'express';
import { CreateLocalController } from '../controller/locais/CreateLocal.js';
import { GetAllLocalController } from '../controller/locais/GetAllLocal.js';
import { GetByIdLocalController } from '../controller/locais/GetByIdLocal.js';
import { UpdateLocalController } from '../controller/locais/UpdateLocal.js';
import { DeleteLocalController } from '../controller/locais/DeleteLocal.js';

const localRouter = Router();

// Create
const createLocalController = new CreateLocalController();
localRouter.post('/locais', createLocalController.handle);

// Get All
const getAllLocalController = new GetAllLocalController();
localRouter.get('/locais', getAllLocalController.handle);

// Get By Id
const getByIdLocalController = new GetByIdLocalController();
localRouter.get('/locais/:id', getByIdLocalController.handle);

// // Update
const updateLocalController = new UpdateLocalController();
localRouter.put('/locais', updateLocalController.handle);

// // Delete
const deleteLocalController = new DeleteLocalController();
localRouter.delete('/locais', deleteLocalController.handle);

export { localRouter };