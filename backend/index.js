const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const UserRoute = require('./Routes/UserRoute');
const connection = require('./Config/db');
const TaskRoute = require('./Routes/TaskRoute');
const app = express();
app.use(cors({
    origin: ["http://localhost:3000", "deployed link here"], // paste frontend  deployed link here
    credentials: true
}))

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to Backend of TaskSync');
})

// Routes
app.use('/user', UserRoute);
app.use('/task', TaskRoute);

app.listen(8080, async () => {
    try {
        await connection;
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error connecting to MongoDB", error);

    }
})