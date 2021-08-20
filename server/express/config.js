// 协商缓存 etag强缓存
const MD5 = require('md5');
const fs = require('fs');

// 强缓存
// const options = {
//   etag: false, // 禁止协商缓存
//   lastModified: false, // 禁止协商缓存
//   setHeaders: (res, path, stat) => {
//     res.set('Cache-Control', 'max-age=10');
//   }
// }

// 协商缓存 etag弱缓存
// const options = {
//   etag: true, // 开启协商缓存
//   lastModified: true, // 开启协商缓存
//   setHeaders: (res, path, stat) => {
//     res.set({
//       'Cache-Control': 'max-age=0',
//       'Pragma': 'no-cache'
//     })
//   }
// }

const options = {
  etag: true, // 开启协商缓存
  lastModified: false, // 关闭另一种协商缓存
  setHeaders: (res, path, stat) => {
    const data = fs.readFileSync(path, 'utf-8').trim(); // 读取文件
    const hash = MD5((JSON.stringify(data))); // MD5加密
    console.log(data, hash)
    res.set({
      'Cache-Control': 'max-age=0',
      'Pragma': 'no-cache',
      'ETag': hash
    })
  }
}

module.exports = {
  options
};