import https from 'https';
import fs from 'fs';

const options = {
  key: fs.readFileSync('./localhost-key.pem'),
  cert: fs.readFileSync('./localhost.pem'),
};

const PORT = 8080;

https
  .createServer(options, (req, res) => {
    console.log('Hmmm');
    res.writeHead(200);
    res.end('HTTPS enabled!');
  })
  .listen(PORT);

console.log(
  `Server is running on port 8080. If you open https://127.0.0.1:${PORT}, its certificate must be valid!`
);
