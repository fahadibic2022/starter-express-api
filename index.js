const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000; // You can change the port if needed

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, World! 1234');
  });
  
app.post('/success', (req, res) => {
  var line  = "Hello Fahad";

  if (!line) {
    return res.status(400).json({ error: 'You must provide a "line" field in the request body' });
  }
  const tmpDir = os.tmpdir();
  // Append the line to a text file
  fs.appendFile(path.join(tmpDir, 'data.txt'), line + '\n', (err) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to store the line' + 
      err.message });
    }

    res.status(200).json({ message: 'Line stored successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

