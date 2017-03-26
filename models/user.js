var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

var User = mongoose.model("User", userSchema);

module.exports = User;