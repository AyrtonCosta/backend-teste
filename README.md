# Aplicação Backend

## Configuração e Execução Local

### Pré-requisitos
- Node.js (v14 ou superior)
- PostgreSQL

### Passos

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-repo/backend.git
    cd backend
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Configure o banco de dados PostgreSQL:
    - Crie um banco de dados chamado `postgres`.
    - Atualize a variável de ambiente `DATABASE_URL` para corresponder à sua configuração do PostgreSQL.

4. Execute a aplicação:
    ```sh
    npm start
    ```

5. A aplicação deve estar rodando em `http://localhost:3000`.

## Configuração e Execução com Docker

### Pré-requisitos
- Docker
- Docker Compose

### Passos

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-repo/backend.git
    cd backend
    ```

2. Construa e execute os containers Docker:
    ```sh
    docker-compose up --build
    ```

3. A aplicação deve estar rodando em `http://localhost:3000`.

4. Para parar os containers:
    ```sh
    docker-compose down
    ```

## Variáveis de Ambiente

Certifique-se de definir as seguintes variáveis de ambiente:

- `DATABASE_URL`: A URL do seu banco de dados PostgreSQL.

Exemplo:
```sh
DATABASE_URL=postgres://user:password@localhost:5432/postgres
```# backend-teste
