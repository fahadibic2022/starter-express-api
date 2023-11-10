const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; // You can change the port if needed

app.use(express.json());
app.get('/', (req, res) => {
    res.send(JSON.stringify(req));
  });
  
app.post('/success', (req, res) => {
    
  var response = "RequestBody: "+JSON.stringify(req.body);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

