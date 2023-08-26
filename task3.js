const fs = require('fs');

// Create a file named "welcome.txt" with content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
    return;
  }
  console.log('File "welcome.txt" created with content: Hello Node');

  // Read and console.log data from welcome.txt
  fs.readFile('welcome.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('Data from welcome.txt:', data);
  });
});
