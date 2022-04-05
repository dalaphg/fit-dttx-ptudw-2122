const express = require('express');
const app = express();

const port = 3000;

//CÁCH 1:
//đây là cách làm tường minh, người bên ngoài dễ loại suy được dường dẫn khiến cho dễ bị tấn công 
//app.use(express.static('public'));

//CÁCH 2:
//cách làm này sẽ bảo mật hơn cách trên
//app.use('/hinh', express.static('public'));

//CÁCH 3:
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.end("Hello world");
});

//mặc dù ta đã tạo web server và ta cũng có folder chứa hình nhưng không phải thư viện nào, hình nào ta cũng cho truy cập vô được
app.get('/image', (req, res) => {
//chúng ta show các hình lên và trả về source code html
//để làm như vậy ta phải khai báo nguyên thư mục 'public' là static, ta sẽ truy xuất được hình từ phía client 

});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});