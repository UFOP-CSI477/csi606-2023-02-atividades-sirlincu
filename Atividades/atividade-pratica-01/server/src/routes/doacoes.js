import { Router } from 'express';
import { CreateDoacaoController } from '../controller/doacoes/CreateDoacao.js';
import { GetAllDoacaoController } from '../controller/doacoes/GetAllDoacao.js';
import { GetByIdDoacaoController } from '../controller/doacoes/GetByIdDoacao.js';
import { UpdateDoacaoController } from '../controller/doacoes/UpdateDoacao.js';
import { DeleteDoacaoController } from '../controller/doacoes/DeleteDoacao.js';

const doacaoRouter = Router();

// Create
const createDoacaoController = new CreateDoacaoController();
doacaoRouter.post('/doacoes', createDoacaoController.handle);

// // Get All
const getAllDoacaoController = new GetAllDoacaoController();
doacaoRouter.get('/doacoes', getAllDoacaoController.handle);

// // Get By Id
const getByIdDoacaoController = new GetByIdDoacaoController();
doacaoRouter.get('/doacoes/:id', getByIdDoacaoController.handle);

// // // Update
const updateDoacaoController = new UpdateDoacaoController();
doacaoRouter.put('/doacoes', updateDoacaoController.handle);

// // // Delete
const deleteDoacaoController = new DeleteDoacaoController();
doacaoRouter.delete('/doacoes', deleteDoacaoController.handle);

export { doacaoRouter };