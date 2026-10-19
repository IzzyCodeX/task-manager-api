const express = require('express');
const app = express();
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

app.listen(port, () => { 
    console.log("Server is running..."); 
});