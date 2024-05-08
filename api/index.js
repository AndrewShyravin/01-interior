const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const blogsData = require('./data/blogs.json');
const personData = require('./data/persons.json');
const projectsData = require('./data/projects.json');
const contactsData = require('./data/contacts.json');
const teamData = require('./data/team.json');

const app = express();

app.use(cors());
app.use(bodyParser.json()); // Используем middleware для парсинга JSON

app.get('/blogs', (req, res) => {
  res.json(blogsData);
});

app.get('/persons', (req, res) => {
  res.json(personData);
});

app.get('/projects', (req, res) => {
  res.json(projectsData);
});
// Маршрут для обработки POST запросов к контактам
app.post('/contacts', (req, res) => {
  try {
    // Получаем данные из тела запроса
    const newContact = req.body;

    // Добавляем новый контакт в массив контактов
    contactsData.push(newContact);

    // Отправляем успешный ответ
    res
      .status(201)
      .json({ success: true, message: 'Contact added successfully' });
  } catch (error) {
    // Если произошла ошибка, отправляем ошибку сервера
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

app.get('/contacts', (req, res) => {
  res.json(contactsData);
});

app.get('/team', (req, res) => {
  res.json(teamData);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
