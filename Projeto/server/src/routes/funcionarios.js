import { Router } from 'express';
import { CreateFuncionarioController } from '../controller/funcionarios/CreateFuncionario.js';
import { GetAllFuncionarioController } from '../controller/funcionarios/GetAllFuncionario.js';
import { GetByIdFuncionarioController } from '../controller/funcionarios/GetByIdFuncionario.js';
import { UpdateFuncionarioController } from '../controller/funcionarios/UpdateFuncionario.js';
import { DeleteFuncionarioController } from '../controller/funcionarios/DeleteFuncionario.js';

const funcionarioRouter = Router();

const createFuncionarioController = new CreateFuncionarioController();
funcionarioRouter.post('/funcionarios', createFuncionarioController.handle);

const getAllFuncionarioController = new GetAllFuncionarioController();
funcionarioRouter.get('/funcionarios', getAllFuncionarioController.handle);

const getByIdFuncionarioController = new GetByIdFuncionarioController();
funcionarioRouter.get('/funcionarios/:id', getByIdFuncionarioController.handle);

const updateFuncionarioController = new UpdateFuncionarioController();
funcionarioRouter.put('/funcionarios', updateFuncionarioController.handle);

const deleteFuncionarioController = new DeleteFuncionarioController();
funcionarioRouter.delete('/funcionarios', deleteFuncionarioController.handle);

export { funcionarioRouter };