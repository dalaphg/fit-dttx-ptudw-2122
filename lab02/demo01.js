//khai báo 1 biến express mà sẽ require thư viện express, tức là include framework vô project 
const express = require('express')
//tạo biến const 'app' và biến dùng phương thức constructor với express là constructor 
const app = express()

const host_name = 'localhost';
const port = 3000;

app.get('/', (req, res) => {
    res.end('GET: OK Hello');
});

app.post('/', (req, res) => {
    res.end('POST: Object is created');
});

app.put('/', (req, res) => {
    res.end('PUT: Data is updated');
});

app.delete('/', (req, res) => {
    res.end('DELETE: Data is deleted');
});

app.listen(port, host_name, () => {
  console.log(`Server is running at http://${host_name}:${port}`);
})
