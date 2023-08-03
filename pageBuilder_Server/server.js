const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = 3000;
server.use(middlewares);
server.use(jsonServer.bodyParser);

// Add any custom routes or middleware here if needed

server.use(router);

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
