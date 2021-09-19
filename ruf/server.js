const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method);

    //// lodash methods
    // var ranNum = _.random(10, 20);
    // console.log(ranNum);

    // // send plain text as response

    // res.setHeader('Content-Type', 'text/plain');
    // res.write('Hello Majid ninja');
    // res.end();

    // // send html page as response

    // res.setHeader('Content-Type', 'text/html');
    // fs.readFile('./views/index.html', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         res.end();
    //     } else {
    //         res.write(data);
    //         res.end();
    //     }
    // });

    // // in ifficiennt way

    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch (req.url) {
        case '/':
        case '/home':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.end(data);
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log(`we are listing port number 3000`);
});