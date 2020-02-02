/*
 * Desenvolvido por Mauricio Redmerski André
 * Projeto da Rocketseat
 * 2020-02-01
*/

const express = require('express');

const server = express();
server.use(express.json());

const users = ['Mauricio', 'pedro', 'kelvin'];

// Middlewares global, é chamado em qualquer rota acessada
server.use((req, res, next) => {
  console.time('request');
  console.log(`Método: ${req.method}; URL: ${req.url}`);

  next();

  console.timeEnd('request');
});

// Middlewares acessíveis por rotas específicas
function checkUserExists(req, res, next) {
  if (!req.body.name) {
    return res.status(400).json({ error: 'User name is required' });
  }

  return next();
}

function checkUserInArray(req, res, next) {
  const user = users[req.params.index];
  if (!user) {
    return res.status(400).json({ error: 'User does not exists' });
  }

  req.user = user;
  return next();
}

// Rotas disponíveis
server.get('/users', (req, res) => {
  return res.json(users);
});

server.get('/users/:index', checkUserInArray, (req, res) => {
  return res.json(req.user);
});

server.post('/users', checkUserExists, (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put('/users/:index', checkUserInArray, checkUserExists, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index', checkUserInArray, (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.send();
});

server.listen(3000);