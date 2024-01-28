import { Router } from 'express';
import { CreateCidadeController } from '../controller/cidades/CreateCidade.js';
import { GetAllCidadeController } from '../controller/cidades/GetAllCidade.js';
import { GetByIdCidadeController } from '../controller/cidades/GetByIdCidade.js';
import { UpdateCidadeController } from '../controller/cidades/UpdateCidade.js';
import { DeleteCidadeController } from '../controller/cidades/DeleteCidade.js';

const cidadeRouter = Router();

// Create
const createCidadeController = new CreateCidadeController();
cidadeRouter.post('/cidades', createCidadeController.handle);

// Get All
const getAllCidadeController = new GetAllCidadeController();
cidadeRouter.get('/cidades', getAllCidadeController.handle);

// Get By Id
const getByIdCidadeController = new GetByIdCidadeController();
cidadeRouter.get('/cidades/:id', getByIdCidadeController.handle);

// Update
const updateCidadeController = new UpdateCidadeController();
cidadeRouter.put('/cidades', updateCidadeController.handle);

// Delete
const deleteCidadeController = new DeleteCidadeController();
cidadeRouter.delete('/cidades', deleteCidadeController.handle);

export { cidadeRouter };