// Create web server
// Create a new web server using the express module
const express = require('express');
const app = express();

// Create a new web server using the express module
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a new web server using the express module
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

// Create a new web server using the express module
const Comment = mongoose.model('Comment', {
  username: String,
  body: String
});

// Create a new web server using the express module
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.send(comments);
});

// Create a new web server using the express module
app.post('/comments', async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.sendStatus(201);
});

// Create a new web server using the express module
app.listen(3001, () => {
  console.log('Server listening on http://localhost:3001');
});