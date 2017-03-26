var mongoose = require("mongoose");

mongoose.connect('mongodb://test:start123@localhost:27017/testdb', function(error) {
    if (error)
        console.log(error);
});

var Schema = mongoose.Schema;

var testSchema = new Schema({
    name: String,
    last_name: String,
    created_at: Date
});

var Test = mongoose.model('Test', testSchema);

var newTest = new Test({
    name: "André",
    last_name: "da Silva",
    created_at: new Date()
});

newTest.save(function(err, data) {
    if (err)
        console.log(err);
    else
        console.log("Successfully inserted a new test in the mongodb with the id: %s", data._id);
        console.log(data);
        mongoose.disconnect();
});