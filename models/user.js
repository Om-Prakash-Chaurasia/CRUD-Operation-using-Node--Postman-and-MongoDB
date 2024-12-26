const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the username"]
        },
        age: {
            type: Number,
            required: [true, "Please enter your age"],
            default: 0
        },
        email_id: {
            type: String,
            required: [true, "Please enter the email"]
        },
        password: {
            type: String,
            required: [true, "Please enter the password"]
        }
    },
    {
        timestamp: true
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;