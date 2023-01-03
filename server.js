const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

axios.get('/api/users')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

app.get('/api/users', (req, res) => {
  User.find((error, users) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(users);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
