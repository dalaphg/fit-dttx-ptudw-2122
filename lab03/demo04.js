const express = require('express');
const app = express();
const router = express.Router();
//nếu ta tách ra nhiều file thì file chính, là file demo04.js, không cần khai báo router

const port = 3000;
//map đường dẫn mặc định vào router tương ứng trong trường hợp không tách ra nhiều file, tức là không gọi module demo04.product.js
//lợi thế của router là có thể tách thành phần xử lý ra bên ngoài
//app.use('/', router);

//thay vì dùng app.use thì ta dùng router.use và đưa đoạn requestLog vào 
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.status(200).send("GET: homepage");
});

const productRouter = require('./demo04.product.js');
app.use('/product', productRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});