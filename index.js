const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; // You can change the port if needed

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World! 53');
  });
  
app.post('/success', (req, res) => {
  var line  = "Hello Fahad";

  if (!line) {
    return res.status(400).json({ error: 'You must provide a "line" field in the request body' });
  }
  // Append the line to a text file
  fs.appendFile('data.txt', line + '\n', (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to store the line' + err});
    }

    res.status(200).json({ message: 'Line stored successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

