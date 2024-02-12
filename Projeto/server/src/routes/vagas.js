import { Router } from 'express';
import { CreateVagaController } from '../controller/vagas/CreateVaga.js';
import { GetAllVagaController } from '../controller/vagas/GetAllVaga.js';
import { GetByIdVagaController } from '../controller/vagas/GetByIdVaga.js';
import { UpdateVagaController } from '../controller/vagas/UpdateVaga.js';
import { DeleteVagaController } from '../controller/vagas/DeleteVaga.js';

const vagaRouter = Router();

const createVagaController = new CreateVagaController();
vagaRouter.post('/vagas', createVagaController.handle);

const getAllVagaController = new GetAllVagaController();
vagaRouter.get('/vagas', getAllVagaController.handle);

const getByIdVagaController = new GetByIdVagaController();
vagaRouter.get('/vagas/:id', getByIdVagaController.handle);

const updateVagaController = new UpdateVagaController();
vagaRouter.put('/vagas', updateVagaController.handle);

const deleteVagaController = new DeleteVagaController();
vagaRouter.delete('/vagas', deleteVagaController.handle);

export { vagaRouter };