const path = require('path');
const jsonData = require('./db.json');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });

app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});

app.get('/db', (req, res) => {
     res.json(jsonData);
});

app.serve(3000);