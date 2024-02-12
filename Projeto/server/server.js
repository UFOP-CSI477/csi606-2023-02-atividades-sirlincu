import express from 'express';

const server = express();
const port = 5000;

// ROUTES
server.get('/', (req, res) => {
    res.json({ message: 'Status: Server Running!' });

    // res.send('Hello World!');
});

// Middleware para fazer o parsing de JSON e permitir o CORS
server.use(express.json());
// server.use(cors());

// Usando os routers
// server.use(estadoRouter);
// server.use(cidadeRouter);
// server.use(localRouter);
// server.use(doacaoRouter);
// server.use(pessoaRouter);
// server.use(tipoSanguineoRouter);


server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});