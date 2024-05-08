const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser'); // Подключаем body-parser для работы с телом запроса
const fs = require('fs'); // Подключаем модуль для работы с файловой системой
const app = express();

app.use(cors());
app.use(bodyParser.json()); // Используем body-parser для разбора JSON данных из запроса

// Загрузка данных из файла
let contactsData = require('./data/contacts.json');

// Обработчик для POST запроса на маршрут /contacts
app.post('/contacts', (req, res) => {
  try {
    // Получаем данные из тела запроса
    const newContact = req.body;

    // Добавляем новый контакт в массив
    contactsData.push(newContact);

    // Сохраняем обновленные данные в файл
    fs.writeFileSync('./data/contacts.json', JSON.stringify(contactsData));

    // Отправляем успешный ответ
    res.status(201).json({ success: true });
  } catch (error) {
    // Если произошла ошибка, отправляем ошибку сервера
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
