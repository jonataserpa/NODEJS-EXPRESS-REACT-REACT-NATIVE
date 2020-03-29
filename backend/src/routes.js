/**
 * Rota / Recurso
 * 
 * Tipos de Parâmetros: 
 * 
 * Query Params: retorno -> request.query,  Parâmetros nomeados enviados na rota após "?" (filtros, paginação) ex: localhost:3333/users?name=Jhow ou users?page=2&name=Jhow&idade=30
 * Route Params: retorno -> request.params, /users/:id Parâmetros utilizados para identificar recursos unico ex: localhost:3333/users/5
 * Request Body: retorno -> request.body,  Corpo da requisição, utilizados para criar ou alterar os recursos
 */

const OngController  = require('./controllers/OngController');
const IncidentController  = require('./controllers/IncidentController');
const ProfileController  = require('./controllers/ProfileController');
const SessionController  = require('./controllers/SessionController');
const express = require('express');
const routes = express.Router(); 

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.get('/profile', ProfileController.index);
routes.post('/sessions', SessionController.create);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);
routes.put('/incidents/:id', IncidentController.update);

module.exports = routes;