const fs = require('fs');
const path = require('path');
const request = require('request');
const stream = fs.readFileSync(path.join(__dirname, '../public/utils.js'));

request.post({
  url: 'http://localhost:9999/api/upload',
  formData: {
    file: {
      value: stream,
      options: {
        filename: 'utils.js'
      }
    },
  }
}, (err, res, body) => {
  console.log(body);
})