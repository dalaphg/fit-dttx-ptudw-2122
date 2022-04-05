const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));

const middleware = require('./demo03_middleware.js')
app.use(middleware());
//trường hợp gõ đường dẫn không đúng, vd như "http://localhost:3000/abc" thì ta không muốn nó chạy tiếp
app.use((err, req, res, next) => {
    res.status(400).send(err.middleware);
});

app.get('/', (req, res) => {
    res.end("Hello world");
});

app.post('/', (req, res) => {
    res.end("POST method");
});

app.get('/product', (req, res) => {
    res.end("GET: get information of Product");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});