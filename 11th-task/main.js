const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body><h1>Welcome to the Home Page</h1></body>');
    res.write('</html>');
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>About</title></head>');
    res.write('<body><h1>About Us</h1><p>This is the about page.</p></body>');
    res.write('</html>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<html>');
    res.write('<head><title>404</title></head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
  }
});

const PORT = 4000;
server.listen(4000, () => {
  console.log('Server running at http://localhost:4000');
});
