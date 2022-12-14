const express = require('express');
const app = express();
const postController = require('./controllers/posts');
const userController = require('./controllers/users');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3003;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', express.static('./client/dist'));

app.use(express.json());

app
  .use('/api/posts', postController)
  .use('/api/users', userController);

app.get('*', (req,res) => {
  res.sendFile('index.html', {root: './client/dist'});
});
  
app.use((err, req, res, next) => {
    console.log(err);
    res.status( err.httpCode ?? 500).send({
        message: err.message ?? 'Something went wrong',
        status: err.httpCode ?? 500
    })
  });

  app
  .get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Server response');
  })
  .get('/error', (req, res) => {
    sss.PORT();
  });

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});