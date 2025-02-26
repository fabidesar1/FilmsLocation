const express = require('express');
const app = express();
const path = require('path');
const PORT = 3230;

app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});