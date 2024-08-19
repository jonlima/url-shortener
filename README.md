<h2 align="center">url-shortener</h2>

### About

URL Shortener is a backend application that provides a URL shortening service.

<img src="./artifacts/sd-v1.png"/>

### Stack

- **[NodeJS](https://nodejs.org/en)**: 20.x
- **[NestJs](https://nestjs.com/)**: ^10.0.0
- **[TypeOrm](https://typeorm.io/)**: ^0.3.20
- **[PostgreSQL](https://www.postgresql.org/)**: ^8.12.0

### Features

- URL shortening
- Click count on shortened URLs

### How to Run the Project

#### Prerequisites

- **[NodeJS](https://nodejs.org/en)**: 20.x
- **[Docker](https://www.docker.com/)** 

### Environment variables
```bash
APP_PORT=3001
API_DOMAIN=http://localhost
DATABASE_HOST=
DATABASE_PORT=5432
DATABASE_NAME=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_SCHEMA=public
```

> When using docker-compose, put `db-pg` in DATABASE_HOST

#### Run in Docker

1. Clone:
   ```bash
   git clone https://github.com/jonlima/url-shortener.git
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run:
   ```bash
   npm run start:docker
   ```



> [!NOTE]  
>
> When running in start:docker mode, the application will execute the migrations and create the tables, so don't worry about the database.


### Routes

##### **URLs Module**

| **Route**           | **Method** | **Request Body**                                                     | **Response Body**                             | **Headers**                                  |
|---------------------|------------|----------------------------------------------------------------------|-----------------------------------------------|----------------------------------------------|
| `/`                 | `POST`     | `{ "originalUrl": "string" }`                                        | `{ "id": "number", "shortUrl": "string" }`    | `Authorization: Bearer <token> (optional)`   |
| `/:hash`            | `GET`      | None                                                                 | Redirect to original URL                      | None                                         |
| `/url/user/:id`     | `GET`      | None                                          | `[{"id", "hash", "originalUrl","clickCount", "updatedAt", "url" }]`  | `Authorization: Bearer <token>`              |
| `/url/:id`          | `DELETE`   | None                                                                 | None                                          | `Authorization: Bearer <token>`              |
| `/:hash`            | `PUT`      | `{"originalUrl": "string"}`                   | `{"id", "hash", "originalUrl","clickCount", "updatedAt", "url" }`    | `Authorization: Bearer <token>`              |


##### **Auth Module**

| **Route**           | **Method** | **Request Body**                                                     | **Response Body**                             | **Headers**                                  |
|---------------------|------------|----------------------------------------------------------------------|-----------------------------------------------|----------------------------------------------|
| `/login`            | `POST`     | `{ "email": "string", "password": "string" }`                        | `{ "access_token": "string" }`                | None                                         |



##### **Users Module**

| **Route**           | **Method** | **Request Body**                                                     | **Response Body**                             | **Headers**                                  |
|---------------------|------------|----------------------------------------------------------------------|-----------------------------------------------|----------------------------------------------|
| `/`                 | `POST`     | `{ "originalUrl": "string" }`                                        | `{ "id": "number", "shortUrl": "string" }`    | None                                         |
| `/:hash`            | `GET`      | None                                                                 | Redirect to original URL                      | None                                         |



### Documentation

How to access and generate project documentation (Swagger and Compodoc).

- Access the API documentation (Swagger) at: `/doc` or `/doc/json`
- Online access [(https://jonlima.github.io/url-shortene)](https://jonlima.github.io/url-shortener/)

**Compodoc**:

Run
```bash
npm run compodoc
```

> [!NOTE]
>
> The generated documentation will be saved in the `docs` folder


### Entity-Relationship (ER) model (Complete)

<img src="./artifacts/ER-Model.png"/>

### Future Scope

<img src="./artifacts/Scope.png" />

### Improvements

- Break into services
- Add cache
- Deploy on a cloud
- Logging and Monitoring
- Add resources: Plan, URL Metadata, Click Tracking
- Add circuit breake
- Add pagination
- Customizable URL
- Experiment with URLs
- Add load balancer

### Autor

[![Linkedin Badge](https://img.shields.io/badge/-JonathaLima-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jonathalima/)](https://www.linkedin.com/in/jonathalima/)
