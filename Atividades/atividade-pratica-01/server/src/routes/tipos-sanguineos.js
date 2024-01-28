import { Router } from 'express';
import { CreateTipoSanguineoController } from '../controller/tipos-sanguineos/CreateTipo.js';
import { GetAllTipoSanguineoController } from '../controller/tipos-sanguineos/GetAllTipo.js';
import { GetByIdTipoSanguineoController } from '../controller/tipos-sanguineos/GetByIdTipo.js';
import { UpdateTipoSanguineoController } from '../controller/tipos-sanguineos/UpdateTipo.js';
import { DeleteTipoSanguineoController } from '../controller/tipos-sanguineos/DeleteTipo.js';

const tipoSanguineoRouter = Router();

// Create
const createTipoSanguineoController = new CreateTipoSanguineoController();
tipoSanguineoRouter.post('/tipos-sanguineos', createTipoSanguineoController.handle);

// Get All
const getAllTipoSanguineoController = new GetAllTipoSanguineoController();
tipoSanguineoRouter.get('/tipos-sanguineos', getAllTipoSanguineoController.handle);

// // Get By Id
const getByIdTipoSanguineoController = new GetByIdTipoSanguineoController();
tipoSanguineoRouter.get('/tipos-sanguineos/:id', getByIdTipoSanguineoController.handle);

// // Update
const updateTipoSanguineoController = new UpdateTipoSanguineoController();
tipoSanguineoRouter.put('/tipos-sanguineos', updateTipoSanguineoController.handle);

// // Delete
const deleteTipoSanguineoController = new DeleteTipoSanguineoController();
tipoSanguineoRouter.delete('/tipos-sanguineos', deleteTipoSanguineoController.handle);

export { tipoSanguineoRouter };