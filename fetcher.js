const request = require('request');
const fs = require('fs');

const inputFrom =  process.argv.slice(2);
const url = inputFrom[0];
const path = inputFrom[1];
// const fetcher = function(URL, filePath) {
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the www.example.edu homepage.
    const content = body.toString();
    fs.writeFile(path, content, (err) => {
      const bytesWritten = content.length * 8;
    if (err) {
      console.error(err)
    } else {
    console.log(`Downloaded and saved ${bytesWritten} bytes to ${path}.`);
    }
  });
});












