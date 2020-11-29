const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const port = process.env.PORT || 4000

const { users } = require('./state')
let counter = users.length;

/* BEGIN - create routes here */
app.use(bodyParser.json());

// Gets the array of Users
app.get('/users', (req, res) => {
  return res.json(users);
})

// Gets User by ID
app.get('/users/:id', (req, res) => {
  let userId = users.filter(usr => usr._id = req.params.id); // Creates a new array of users (usr), then call a function that assigns the usr._id = req.params.id
  return res.json(userId[0]);
})

// POST to /users
app.post('/users', (req, res) => {
  users.push({
    "_id": counter+1,
    "name": "Casey Calkins",
    "occupation": "Dev",
    "avatar": "Picture"
  })
  counter++;
})

// PUT to /users
app.put('/users/:id', (req, res) => {
  let userId = users.filter(usr => usr._id = req.params.id);
  userId[0].name = "Casey Calkins";
  res.json(userId[0]);
})

/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))