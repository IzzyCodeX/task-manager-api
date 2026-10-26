const express = require('express');
const app = express();
app.use(express.json())
let task = [{
    id: 1,
    title: "Task 1",
    completed: false
}];