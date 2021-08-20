const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname,'../app/public/file/read.txt'), (err, data) => {
  if (err) return console.error(err);
  console.log(data.toString())
})

console.log('读取完成')
