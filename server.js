const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
// To fetch all users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

// To fetch individual user by ID
app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
});

// To write a user into database
app.post('/users', async (req, res) => {
    try {
        const users = await User.create(req.body)
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ message: error.message })
    }
});

// app.listen(3000, () => {
//     console.log("Server is up and running on port 3000");
// });

const connectDB = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
};

connectDB()
    .then(() => {
        console.log("Connection with Database established!");
    })
    .catch((err) => {
        console.log("UNABLE TO CONNECT TO DATABASE", err);
    });

const port = 3000;
app.listen(port, () => {
    console.log("Server is up and running on port", port);
});