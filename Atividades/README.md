# Projeto Web com Backend em Node.js e Frontend em React (Vite)

Este é um projeto web que consiste em um backend construído em Node.js e um frontend em React usando Vite.

## Estrutura do Projeto

- `Atividades/atividade-pratica-01/server`: Contém o código do backend construído em Node.js.
- `Atividades/atividade-pratica-02/web/web-vite`: Contém o código do frontend construído em React com Vite.

## Configurando o Arquivo .env para o Banco de Dados

Para rodar o banco de dados com o Prisma, é necessário configurar o arquivo `.env` na pasta do backend (`Atividades/atividade-pratica-01/server`). Este arquivo contém variáveis de ambiente, incluindo a URL do banco de dados.

Aqui está um exemplo de como o arquivo `.env` pode ser configurado para utilizar um banco SQLite:

```env
DATABASE_URL="file:./aplicacao.sqlite"
```

Neste exemplo, `DATABASE_URL` especifica o caminho relativo para o arquivo SQLite (`aplicacao.sqlite`). Certifique-se de ajustar essa URL de acordo com as configurações do seu banco de dados.

Ao utilizar o Prisma, o `.env` é crucial para armazenar informações sensíveis, como credenciais de banco de dados, que não devem ser compartilhadas no controle de versão. Certifique-se de adicionar o `.env` ao seu arquivo `.gitignore` para evitar o rastreamento acidental no Git.

Depois de configurar o `.env`, o Prisma usará essas configurações para se conectar ao banco de dados ao executar os comandos de migração e ao acessar os dados no código do backend.

Lembre-se de reiniciar o servidor backend após configurar o `.env` para que as alterações entrem em vigor:

```bash
npm start
```

Certifique-se de que o caminho do banco de dados e outras configurações estão corretos, e seu backend deve estar pronto para interagir com o banco de dados SQLite especificado.

## Executando o Backend

1. Navegue até a pasta do backend:

```bash
cd Atividades/atividade-pratica-01/server
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor backend:

```bash
npm start
```

O servidor estará disponível em [http://localhost:5000](http://localhost:5000).

## Executando o Frontend

1. Navegue até a pasta do frontend:

```bash
cd Atividades/atividade-pratica-02/web/web-vite
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor de desenvolvimento estará disponível em [http://localhost:5137](http://localhost:5137).

## Observações

- Certifique-se de ter o Node.js instalado na sua máquina.
- Antes de executar o frontend, verifique se o backend está em execução para garantir a comunicação adequada entre as partes.
- O código pode conter outras dependências específicas que precisam ser instaladas. Consulte os READMEs individuais nas pastas do backend e frontend para obter informações adicionais.

Este é um exemplo básico de um README. Personalize-o conforme necessário, fornecendo informações específicas sobre as funcionalidades do seu projeto, requisitos do sistema, configurações, entre outros detalhes.