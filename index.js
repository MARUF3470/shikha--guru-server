const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require('./data/courses.json')
const subjects = require('./data/subjects.json')
app.get('/', (req, res) => {
    res.send('Hello world')
})
app.get('/courses', (req, res) => {
    res.send(courses)
})
app.get('/subjects/:id', (req, res) => {
    const id = req.params.id
    // console.log(id)
    const categorySubject = subjects.filter(subject => subject.id == id)
    res.send(categorySubject)
})
app.get('/subject/:id', (req, res) => {
    const id = req.params.id
    const subject = subjects.find(subject => subject.subjectID == id)
    res.send(subject)
})
app.listen(port, () => {
    console.log()
})