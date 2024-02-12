import { Router } from 'express';
import { CreateEmpresaController } from '../controller/empresas/CreateEmpresa.js';
import { GetAllEmpresaController } from '../controller/empresas/GetAllEmpresa.js';
import { GetByIdEmpresaController } from '../controller/empresas/GetByIdEmpresa.js';
import { UpdateEmpresaController } from '../controller/empresas/UpdateEmpresa.js';
import { DeleteEmpresaController } from '../controller/empresas/DeleteEmpresa.js';

const empresaRouter = Router();

const createEmpresaController = new CreateEmpresaController();
empresaRouter.post('/empresas', createEmpresaController.handle);

const getAllEmpresaController = new GetAllEmpresaController();
empresaRouter.get('/empresas', getAllEmpresaController.handle);

const getByIdEmpresaController = new GetByIdEmpresaController();
empresaRouter.get('/empresas/:id', getByIdEmpresaController.handle);

const updateEmpresaController = new UpdateEmpresaController();
empresaRouter.put('/empresas', updateEmpresaController.handle);

const deleteEmpresaController = new DeleteEmpresaController();
empresaRouter.delete('/empresas', deleteEmpresaController.handle);

export { empresaRouter };