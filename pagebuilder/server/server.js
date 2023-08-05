const jsonServer = require('json-server');
const express = require('express');
const jsonfile = require('jsonfile');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const dataFilePath = 'db.json';

server.use(middlewares);
server.use(express.json());

// Custom route handler for saving POST requests
server.post('/pages', (req, res) => {
  console.log('zarp')
  // console.log(JSON.stringify(req.body))
  jsonfile.readFile(dataFilePath, (err, data) => {
    if (err){
      console.error('Erro in data file');
      res.status(500).send('Erro in data file');
    }
    else{
      const items=req.body;
      // console.log(data.pages)
      // console.log(req.body)
      console.log({...req.body})
      jsonfile.writeFile(dataFilePath, {pages:{...req.body}}, (err) => {
        if (err){
          console.error('Erro in data file');
          res.status(500).send('Erro in data file');
        }
        else{
          res.status(200).send('OK');
        }
      });
    }

  });
 
});

server.get('/pages', (req,res)=>{
  const data=router.db.getState();
  console.log(data)
  res.json(data)
});
server.use(router);

const port = 3000;

server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
});