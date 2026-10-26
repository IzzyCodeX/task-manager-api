const express = require('express'); //calling express from the node modules file

const app = express(); // intializing express into the app

app.use(express.json()) //This is a middle ware to parse incoming JSON data from the request body

// The task object array of tasks
let tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, titlt: "Task 2", completed: true }
];