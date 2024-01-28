import { Router } from 'express';
import { CreatePessoaController } from '../controller/pessoas/CreatePessoa.js';
import { GetAllPessoaController } from '../controller/pessoas/GetAllPessoa.js';
import { GetByIdPessoaController } from '../controller/pessoas/GetByIdPessoa.js';
import { UpdatePessoaController } from '../controller/pessoas/UpdatePessoa.js';
import { DeletePessoaController } from '../controller/pessoas/DeletePessoa.js';

const pessoaRouter = Router();

// Create
const createPessoaController = new CreatePessoaController();
pessoaRouter.post('/pessoas', createPessoaController.handle);

// Get All
const getAllPessoaController = new GetAllPessoaController();
pessoaRouter.get('/pessoas', getAllPessoaController.handle);

// // Get By Id
const getByIdPessoaController = new GetByIdPessoaController();
pessoaRouter.get('/pessoas/:id', getByIdPessoaController.handle);

// // Update
const updatePessoaController = new UpdatePessoaController();
pessoaRouter.put('/pessoas', updatePessoaController.handle);

// // Delete
const deletePessoaController = new DeletePessoaController();
pessoaRouter.delete('/pessoas', deletePessoaController.handle);

export { pessoaRouter };
