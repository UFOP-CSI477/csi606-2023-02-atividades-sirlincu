# **Proposta de Trabalho Final**

## *Aluna(o): Lincoln Rebouças*

### Resumo

  O presente projeto tem como objetivo o desenvolvimento de um Sistema de Gerenciamento de Estágios, uma aplicação web que visa simplificar e automatizar o processo de seleção, acompanhamento e administração de estágios para estudantes e empresas. A proposta busca melhorar a eficiência, transparência e experiência do usuário tanto para alunos em busca de oportunidades de estágio quanto para empresas interessadas em encontrar estagiários qualificados.

### 1. Tema

  O trabalho final tem como tema o desenvolvimento do "Sistema de Gerenciamento de Estágios", uma plataforma online que facilitará a integração entre alunos e empresas, otimizando o processo de seleção, acompanhamento e administração de estágios.

### 2. Escopo

  Este projeto abrangerá as seguintes funcionalidades:

- Registro de Alunos:
  - Criação de perfis pessoais com informações acadêmicas e profissionais.4

- Registro de Empresas:
  - Registro de informações detalhadas sobre as organizações e requisitos de estágio.

- Publicação de Vagas de Estágio:
  - Postagem de detalhes sobre oportunidades de estágio, incluindo descrições de trabalho, requisitos, localização e datas de início/fim.

- Candidaturas:
  - Pesquisa de vagas de estágio disponíveis.
  - Candidatura às vagas por parte dos alunos.
  - Revisão, gerenciamento e resposta de candidaturas por parte das empresas.

- Rastreamento de Progresso:
  - Acompanhamento do status de candidaturas pelos alunos (pendente, aceita, rejeitada).

- Notificações:
  - Sistema de notificações para lembretes de prazos, atualizações de status e comunicação entre alunos e empresas.

- Experiência do Usuário:
  - Interface amigável e intuitiva para garantir uma experiência positiva para alunos e empresas.

### 3. Restrições

  Neste trabalho não serão considerados:

- Integração com Outras Plataformas:
  - Não será realizada a integração com outras plataformas de emprego ou redes sociais neste momento.

- Armazenamento de Documentos:
  - Os documentos enviados pelos alunos (currículos, etc.) serão armazenados localmente no sistema e não em serviços de armazenamento em nuvem externos.

- Idioma da Plataforma:
  - A plataforma será desenvolvida inicialmente em um único idioma. A internacionalização e suporte a vários idiomas não serão considerados nesta fase.

### 4. Protótipo

  Protótipos para as páginas foram elaborados, e podem ser encontrados em: 

- [Telas de vagas e candidaturas](./prototipo/telas.png)

--------------+

# **Trabalho Final - Resultados**

## *Aluna(o): Lincoln Rebouças*

### 1. Funcionalidades implementadas
- Registro de Alunos:
    - Foi desenvolvido o cadastro de alunos, permitindo a criação de perfis pessoais com informações acadêmicas.

- Login de Aluno:
    - Implementou-se o sistema de autenticação para alunos, garantindo o acesso seguro às funcionalidades relacionadas a seus perfis.

- Registro de Empresas:
    - A funcionalidade de registro de empresas foi implementada, permitindo o cadastro de informações detalhadas sobre as organizações e seus requisitos de estágio.

- Criação de Vagas:
    - Foi desenvolvida a capacidade de as empresas publicarem detalhes sobre oportunidades de estágio, incluindo descrições de trabalho, requisitos, localização e datas de início/fim.
  
### 2. Funcionalidades previstas e não implementadas
- Upload de Currículos e Documentos:
    - A funcionalidade de upload de currículos e documentos pelos alunos não foi implementada nesta fase inicial. 

- Candidaturas (Pesquisa e Revisão):
    - Embora tenha sido implementada a funcionalidade básica de candidaturas, a pesquisa de vagas disponíveis e a revisão de candidaturas por parte das empresas não foram concluídas. 

- Rastreamento de Progresso:
    - O acompanhamento do status de candidaturas pelos alunos não foi implementado nesta fase. 

- Notificações:
    - O sistema de notificações para lembretes de prazos, atualizações de status e comunicação entre alunos e empresas não foi implementado.

- Experiência do Usuário:
    - A implementação de uma interface amigável e intuitiva para garantir uma experiência positiva para alunos e empresas não foi realizada nesta etapa.

### 3. Outras funcionalidades implementadas
- Login de Aluno:
    - A autenticação segura foi implementada sem a utilização de JSON Web Tokens (JWT).

### 4. Principais desafios e dificuldades
- Desafios Técnicos na Adoção de JWT:
    - Após tentativas exaustivas, a decisão foi tomada de adotar uma abordagem mais convencional baseada em sessões no servidor para garantir a eficácia e o cumprimento do cronograma.
- Fatores que Influenciaram o Atraso no Cronograma:
    - Alguns fatores, incluindo questões técnicas e externas, influenciaram no atraso do cronograma do desenvolvimento levando à imperfeição do sistema.
### 5. Instruções para instalação e execução

#### Backend (Node.js):

1. **Clone o repositório:**
   ```bash
   https://github.com/UFOP-CSI477/csi606-2023-02-atividades-sirlincu/tree/master
   ```

2. **Acesse o diretório do servidor:**
   ```bash
   cd Projeto/server
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configure o banco de dados:**
   - Certifique-se de que o Prisma está configurado corretamente no arquivo `schema.prisma`.
   - Execute as migrações do banco de dados:
     ```bash
     npx prisma migrate dev
     ```

5. **Inicie o servidor:**
   ```bash
   npm start
   ```
   - O servidor estará acessível em: `http://localhost:5000`.

#### Frontend (React Vite):

1. **Acesse o diretório do frontend:**
   ```bash
   cd Projeto/web
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure a conexão com o backend:**
   - Verifique se as configurações de API no frontend (arquivo `.env`) estão apontando corretamente para o servidor backend.
   - A recomendação para o arquivo .env pode ser a seguinte, considerando a configuração do banco de dados SQLite:
    ```bash
   DATABASE_URL="file:./aplicacao.sqlite"
   ```



4. **Inicie o frontend:**
   ```bash
   npm run dev
   ```
   - O frontend estará acessível em: `http://localhost:5173`.


Certifique-se de ter o Node.js e o npm instalados em sua máquina. Essas instruções são baseadas em um ambiente de desenvolvimento. 

### 6. Referências

Serão utilizados os seguintes sites como referência: 

- LinkedIn. Disponível em: [LinkedIn](https://www.linkedin.com/). Acesso em: 16 jan. 2024.

- Vagas. Disponível em: [Vagas](https://www.vagas.com.br/). Acesso em: 17 jan. 2024.

- Gupy. Disponível em: [Gupy](https://www.gupy.io/). Acesso em: 17 jan. 2024.

- PRISMA. Prisma schema. Disponível em: [Prisma Schema](https://www.prisma.io/docs/orm/prisma-schema/). Acesso em: 18 jan. 2024.

- Vídeo do YouTube (Rocketseat - UI Clone #10 - LinkedIn e Shimmer Effect no ReactJS):

    - ROCKETSEAT. LinkedIn e Shimmer Effect no ReactJS | UI Clone #10. In: UI Clone. [S.l.], 2024. Disponível em: https://www.youtube.com/watch?v=-ZV-_7vNRGw&list=PL85ITvJ7FLohTZv9cC5-PrZ39Q3cugWqp&index=8. Acesso em: 6 fev. 2024.