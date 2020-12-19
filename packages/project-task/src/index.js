const express = require('express');

const server = express();
server.use(express.json());

const projects = [];

// Middleware global que conta as requisições
server.use((req, res, next) => {
  console.count('Requisição');
  next();
});

// Middleware que verifica se o projeto existe com base no id
function checkProjectInArray(req, res, next) {
  const { id } = req.params;
  const project = projects.find((p) => p.id === id);
  if (!project) {
    return res.status(400).json({ error: 'Project does not exists' });
  }

  req.project = project;
  return next();
}

// Rotas disponíveis
server.get('/projects', (req, res) => {
  res.json(projects);
});

server.get('/projects/:id', checkProjectInArray, (req, res) => {
  res.json(req.project);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const indexProject = projects.findIndex((project) => project.id === id);
  if (indexProject !== -1) {
    return res
      .status(400)
      .json({ error: 'There is already a project with this id' });
  }

  projects.push({
    id,
    title,
    tasks: [],
  });

  return res.json(projects);
});

server.put('/projects/:id', checkProjectInArray, (req, res) => {
  const { title } = req.body;

  req.project.title = title;

  return res.json(projects);
});

server.delete('/projects/:id', checkProjectInArray, (req, res) => {
  projects.splice(req.indexProject, 1);
  res.send();
});

server.post('/projects/:id/tasks', checkProjectInArray, (req, res) => {
  const { title } = req.body;
  req.project.tasks.push(title);

  return res.json(projects);
});

server.listen(3000);
