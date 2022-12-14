const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const courses = require('./Data/courses.json');

app.get('/courses', (req, res) => {
    res.send(courses);
});

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(n => n._id === id);
    res.send(selectedCourse);
});
app.get('/getpremium/:id', (req, res) => {
    const id = req.params.id;
    const premium = courses.find(n => n._id === id);
    res.send(premium);
});

app.listen(port, () => {
    console.log('Server running on port', port);
})