// Express
var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var router = express.Router();
var userApi = require("./api/users");

// MongoDB
var mongoose = require("mongoose");
mongoose.connect('mongodb://test:start123@localhost:27017/mean', function(error) {
    if (error)
        console.log(error);
});

// Middleware
app.use(bodyParser.json());
app.use(cors());

// API Routes
router.route("/users")
    .get(userApi.getAllUsers)
    .post(userApi.saveUser);

router.route("/users/:id")
    .get(userApi.getUser)
    .put(userApi.updateUser)
    .delete(userApi.deleteUser);

// Start app
var serverPort = 4000;

app.use("/api", router);
app.listen(serverPort, function() {
     console.log("Server is running on port: %s", serverPort);
});



