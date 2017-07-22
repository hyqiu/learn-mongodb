// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // identical from above

// Object destructuring in ES6
// var user = {name: 'andrew', age:25}
// var {name} = user;
// console.log(name);

// var obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',
(err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.close();
});

//});//localhost URL

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  // Insert new doc into Users (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Henri',
  //   age: '25',
  //   location: 'Paris'
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //
  //   console.log(result.ops[0]._id.getTimestamp());
