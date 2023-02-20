# Applifting - Blog APP

Each folder has separate README.md with description

## docs folder

Contains
 - generated API documentation for all endpoints of system with required payload and example response

## backend

Contains:
 - CI (Github actions) pipeline is set-up and ready, but would need separate repo for backend itself.
 - Project structure used by (https://github.com/danielfsousa/express-rest-boilerplate -> auth and project struct) -> its a repository that I use always for my personal projects 
 - System docs in ./backend/uml_design folder -> ER diagrams and use cases
 - UML docs can be generate in backend folder using `yarn docs` -> open in browser: backend/docs/index.html
 - You can run the backend as docker-compose that will create both MongoDB and api service
 - To run backend, follow instruction in ./backend/readme.md file
 - some integration tests in that can be run by `yarn test:integration`
 - some unit test, that can be run by `yarn test:unit`
 - Eslint and prettier

## frontend

Contains:
 - To run frontend, follow instruction in ./frontend/readme.md file
 - Recoil library used for state managmenet
 - AntDesign library used for UI design
 - React Router for routing within the frontend app
 - Axios used for api calls
 - Eslint (aribnb package)
 - Auth & Auth using JWT

Not implemented:
 - GraphQL API ... tbh, I do not have much experience with GraphQL, but super-excited to learn!
 - Multitentant app 
 - Edit article, delete article -> its quite straightforward and repetitive task
 - End-to-end tests using Cypress, but I have some experience with it, example on my github for a different project (https://github.com/rastislavkopal/petclinic_cypress_fe_testing)


I have not used typescript in the implementation, since I have not used it much. But recently I started to learn typescript with Nest.JS framework for pesonal projects :) 