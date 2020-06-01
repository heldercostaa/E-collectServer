import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json(['Helder', 'Leo', 'Primo', 'Juju', 'Lulu']);
});

app.listen(3333);