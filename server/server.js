/// Exporté à mongoose.js
// var mongoose = require('mongoose');
// require('mongoose-type-email');
//
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
// Mongoose takes care of micromanagement of execution

// Model --> refactor to todo.js
// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// var newTodo = new Todo({
//   text: 'Doing dishes'
// });

// var otherTodo = new Todo({
//   // text: 'Doing dishes',
//   // completed: true,
//   // completedAt: 1200
// })

// var otherTodo = new Todo({
//   text: '   hihi  '
// })

/////// Challenge ///////

// User model
// email - require - trim it - set type - set min length of 1

// var User = mongoose.model('User', {
//   email: {
//     required: true,
//     trim: true,
//     type: mongoose.SchemaTypes.Email,
//     minlength: 1
//   }
// });

// var userDo = new User({
//   email: 'jetem'
// })
//
// userDo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
//   // console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// })
//

////////////////////////////
// Save todo
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// })

// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
//   // console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// })

/*
Resource creation endpoint
*/

var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

// install express
// body-parse : send JSON to server

var app = express();

// middlewares

app.use(bodyParser.json());

// resource creation
app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos,
    });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
