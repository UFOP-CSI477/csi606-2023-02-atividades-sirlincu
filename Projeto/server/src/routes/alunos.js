import { Router } from 'express';
import { CreateAlunoController } from '../controller/alunos/CreateAluno.js';
import { GetAllAlunoController } from '../controller/alunos/GetAllAluno.js';
import { GetByIdAlunoController } from '../controller/alunos/GetByIdAluno.js';
import { UpdateAlunoController } from '../controller/alunos/UpdateAluno.js';
import { DeleteAlunoController } from '../controller/alunos/DeleteAluno.js';

const alunoRouter = Router();

const createAlunoController = new CreateAlunoController();
alunoRouter.post('/alunos', createAlunoController.handle);

const getAllAlunoController = new GetAllAlunoController();
alunoRouter.get('/alunos', getAllAlunoController.handle);

const getByIdAlunoController = new GetByIdAlunoController();
alunoRouter.get('/alunos/:id', getByIdAlunoController.handle);

const updateAlunoController = new UpdateAlunoController();
alunoRouter.put('/alunos', updateAlunoController.handle);

const deleteAlunoController = new DeleteAlunoController();
alunoRouter.delete('/alunos', deleteAlunoController.handle);

export { alunoRouter };