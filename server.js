const express = require('express');
const app = express();
app.use(express.json());
let tasks = [{ id: 1, title: "Learn Express", completed: false }, { id: 2, title: "Build API", completed: true }];
const port = 3000;

app.get('/', (req, res) => { 
    res.send("Hello, backend! it's Israel"); 
});

app.get('/health', (req, res) => {
    res.json({"status": "active", "message": "Task Manager API is running"})
});

app.get('/tasks', (req, res) => {
    res.json(tasks)
});

app.post('/tasks', (req, res) => {
    let newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        completed: false
    }
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.listen(port, () => { 
    console.log("Server is running..."); 
});

