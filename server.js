const express = require('express'); //calling express from the node modules file

const app = express(); // intializing express into the app(the server)

app.use(express.json()) //This is a middle ware to parse incoming JSON data from the request body

// The task object array of tasks
let tasks = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true }
];

// The get route to fetching all the tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
})

// The route for fetching a particular task
app.get('/tasks/:id', (req, res) => {
    //fetching the id
    const taskId = req.params.id;
    //using .find() to get the task from the array
    const foundTask = tasks.find(task => task.id === Number(taskId));

    /* an if/else function that returns a 404 status code if the task id isn't found
    and returns the foundTask variable if the task exists */
    if(!foundTask){
        return res.status(404).json({ error: "Task not found" });
    } else {
        res.json(foundTask)
    }
})

// A delete route for deleting tasks
app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id

    //Chcking if the task exits
    const taskToDelete = tasks.find(task => task.id === Number(taskId));

    if(!taskToDelete){
       return res.status(404).json({error: "Task not found"})
    }

    /*Filter all the task except the one to be deleted into a new array assigned
    back to the tasks array*/
    tasks = tasks.filter(task => task.id !== Number(taskId));

    res.send("Task deleted");
})



// Starts the server on port 3000 and listens for incoming requests
app.listen(3000, () => {console.log("Server is running...")})