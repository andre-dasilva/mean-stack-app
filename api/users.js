/**
 * RESTful api definitions
 */
var User = require("../models/user");

var users = {

    saveUser: function(req, res) {
        var newUser = new User(req.body);
        newUser.save(function(err, data) {
            if (err)
                res.send(err);
            else
                res.json(data);
        })
    },

    getAllUsers: function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);
            else
                res.json(users);
        })
    },

    getUser: function(req, res) {
        var id = req.params.id;
        User.findById(id, function(err, user) {
            if (err)
                res.send(err);
            else
                res.json(user);
        })
    },

    updateUser: function(req, res) {
        var id = req.params.id;
        var updateUser = req.body;

        User.findById(id, function(err, user) {
            if (err)
                res.send(err);

            user.save(function(err, updateUser) {
                if (err)
                    res.send(err);
                else
                    res.json(updateUser);
            });
        });
    },

    deleteUser: function(req, res) {
        var id = req.params.id;

        User.findByIdAndRemove(id, function(err) {
            if (err)
                res.send(err);
        });
    }

};

module.exports = users;
