const express = require('express');
const cors = require('cors');
const blogsData = require('./data/blogs.json');
const personData = require('./data/persons.json');
const projectsData = require('./data/projects.json');

const app = express();

app.use(cors());

app.get('/blogs', (req, res) => {
  res.json(blogsData);
});

app.get('/persons', (req, res) => {
  res.json(personData);
});

app.get('/projects', (req, res) => {
  res.json(projectsData);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
