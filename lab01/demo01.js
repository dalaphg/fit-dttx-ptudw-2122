//tạo biến const http
const http = require('http');
//tạo biến const url 
const url = require('url');

//định nghĩa biến const hostname và port 
//1 máy có thể chạy nhiều project node, mỗi project node chạy 1 port khác nhau
const hostname = '127.0.0.1';
const port = 3000;

//tạo biến const server, trong đó lấy đối tượng 'http' ở trên tạo server 
//biến server có các xử lý của phía server
const server = http.createServer((req, res) => {
    let reqObj = url.parse(req.url, true).query; 
    let a = reqObj.a;
    let b = reqObj.b;
    let c = parseInt(a) + parseInt(b);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(`<h1>Hello World c = ${c}</h1>`);
  });

//tiếp theo ta tạo server từ biến server
//nếu nghe được thì ghi ra dòng dưới
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


