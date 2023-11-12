import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Main page');
});

const PORT = process.env.PORT || 4100;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
