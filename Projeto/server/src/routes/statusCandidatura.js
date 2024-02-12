import { Router } from 'express';
import { CreateStatusCandidaturaController } from '../controller/statusCandidaturas/CreateStatusCandidatura.js';
import { GetAllStatusCandidaturaController } from '../controller/statusCandidaturas/GetAllStatusCandidatura.js';
import { GetByIdStatusCandidaturaController } from '../controller/statusCandidaturas/GetByIdStatusCandidatura.js';
import { UpdateStatusCandidaturaController } from '../controller/statusCandidaturas/UpdateStatusCandidatura.js';
import { DeleteStatusCandidaturaController } from '../controller/statusCandidaturas/DeleteStatusCandidatura.js';

const statusCandidaturaRouter = Router();

const createStatusCandidaturaController = new CreateStatusCandidaturaController();
statusCandidaturaRouter.post('/status-candidatura', createStatusCandidaturaController.handle);

const getAllStatusCandidaturaController = new GetAllStatusCandidaturaController();
statusCandidaturaRouter.get('/status-candidatura', getAllStatusCandidaturaController.handle);

const getByIdStatusCandidaturaController = new GetByIdStatusCandidaturaController();
statusCandidaturaRouter.get('/status-candidatura/:id', getByIdStatusCandidaturaController.handle);

const updateStatusCandidaturaController = new UpdateStatusCandidaturaController();
statusCandidaturaRouter.put('/status-candidatura', updateStatusCandidaturaController.handle);

const deleteStatusCandidaturaController = new DeleteStatusCandidaturaController();
statusCandidaturaRouter.delete('/status-candidatura', deleteStatusCandidaturaController.handle);

export { statusCandidaturaRouter };