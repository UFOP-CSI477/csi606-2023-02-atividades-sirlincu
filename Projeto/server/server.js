import express from 'express';
// import cors from 'cors';
import { alunoRouter } from './src/routes/alunos.js';
import { candidaturaRouter } from './src/routes/candidaturas.js';
import { empresaRouter } from './src/routes/empresas.js';
import { statusCandidaturaRouter } from './src/routes/statusCandidatura.js';
import { vagaRouter } from './src/routes/vagas.js';
import { funcionarioRouter } from './src/routes/funcionarios.js';

const server = express();
const port = 5000;

server.get('/', (req, res) => {
    res.json({ message: 'Status: Server Running!' });

});

server.use(express.json());
// server.use(cors());

server.use(alunoRouter);
server.use(candidaturaRouter);
server.use(empresaRouter);
server.use(statusCandidaturaRouter);
server.use(vagaRouter);
server.use(funcionarioRouter);

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});