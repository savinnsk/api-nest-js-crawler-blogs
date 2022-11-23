# API NEST WITH FASTIFY

# Swagger documentation running at http://localhost:3000/api/

## Description

Api to study nest with fastify

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

wanna help me ? you can contribute with ?

- unity tests
- test integration
- swagger-docs
- product entity
- jwt token
- test integration
- clean architecture
- clean code
- add flutter interface



## USER ENDPOINTS

### Create a new user
endpoint: http://localhost:3000/user
method: POST
request body


- properties : {

    - name : string 
    - email: string     
}


### update user
endpoint: http://localhost:3000/user/:id
method: PUT
request body
request params


- properties : {

    - name : string 
    - email: string     
}



### delete user
endpoint: http://localhost:3000/user/:id
method: DELETE
request params


### get all users
endpoint: http://localhost:3000/user/
method: GET

Developed for: Savio Picanço Do Espirito Santo Brito

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.


## License

Nest is [MIT licensed](LICENSE).
